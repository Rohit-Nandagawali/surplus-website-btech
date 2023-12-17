const express = require('express')
const cors = require('cors')
const app = express()
const con = require('./config')
var bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const bcrypt = require("bcrypt")

app.use(cors())

// =========DONOR API =============================

// 1. Get All donors
app.get('/api/donors', (req, res) => {
    con.query("SELECT * FROM donor", (err, result) => {
        if (err) {
            res.send("Error occurred while fetching data");
        } else {
            res.send(result);
        }
    });
});

// 2. Register donor
app.post('/api/donor/register', (req, res) => {
    const { name, orgName, email, passwd, latitude, longitude, geohash, avgRatings } = req.body;

    const insertDonorQuery = 'CALL RegisterDonor(?, ?, ?, ?, ?, ?, ?, ?)';
    con.query(insertDonorQuery, [name, orgName, email, passwd, latitude, longitude, geohash, avgRatings], (err) => {
        if (err) {
            console.error('Error registering donor:', err);

            if (err.code === 'ER_SIGNAL_EXCEPTION' && err.sqlState === '45000') {
                // Email already registered error
                return res.status(400).json({ error: 'Email already registered' });
            }

            return res.status(500).json({ error: 'Internal server error' });
        }

        res.status(201).json({ message: 'Donor registered successfully' });
    });
});


// 3. Login donor
app.post('/api/donor/login', (req, res) => {
    const { email, passwd } = req.body;

    // return res.json(passwd);

    const checkEmailQuery = 'SELECT * FROM donor WHERE email = ?';
    con.query(checkEmailQuery, [email], (err, donor) => {

        // return res.json(donor[0].passwd);

        if (err) {
            console.error('Error checking email:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (donor.length === 0) {
            return res.status(401).json({ error: 'Invalid email or passwd' });
        }

        // Compare passwords directly
        if (passwd !== donor[0].passwd) {
            return res.status(401).json({ error: 'Invalid email or passwd' });
        }

        // const { donorId, donorName, email } = donor[0];
        res.json({ message: 'Login successful', donor: donor[0] });
    });
});


// 4. Get donor Details by donor ID
app.get('/api/donor/:id', (req, res) => {
    const donorId = req.params.id;
    const getDonorQuery = 'SELECT * FROM donor WHERE donorId = ?';
    con.query(getDonorQuery, [donorId], (err, donors) => {
        if (err) {
            console.error('Error getting donor details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (donors.length === 0) {
            return res.status(404).json({ error: 'Donor not found' });
        }

        res.json(donors[0]);
    });
});

// 5. Update donor Details by donor ID
app.put('/api/donor/:id', (req, res) => {
    const donorId = req.params.id;
    const { name, orgName, latitude, longitude, geohash, passwd } = req.body;

    const updateDonorQuery = 'UPDATE donor SET name = ?, orgName = ?, latitude = ?, longitude = ?, geohash = ?, passwd = ? WHERE donorId = ?';
    con.query(updateDonorQuery, [name, orgName, latitude, longitude, geohash, passwd, donorId], (err, updateDonorResult) => {
        if (err) {
            console.error('Error updating donor details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (updateDonorResult.affectedRows === 0) {
            return res.status(404).json({ error: 'Donor not found' });
        }

        res.status(200).json({ message: 'Donor updated successfully' });
    });
});

// =========DONOR API  END=============================

// =========DONEE API =============================

// 1. Register donee
app.post('/api/donee/register', (req, res) => {
    const { doneeName, latitude, longitude, geohash, email, passwd } = req.body;

    const registerDoneeProcedure = 'CALL RegisterDonee(?, ?, ?, ?, ?, ?)';
    con.query(registerDoneeProcedure, [doneeName, latitude, longitude, geohash, email, passwd], (err) => {
        if (err) {
            console.error('Error registering donee:', err);

            if (err.code === 'ER_SIGNAL_EXCEPTION' && err.sqlState === '45000') {
                // Email already registered error
                return res.status(400).json({ error: 'Email already registered' });
            }

            return res.status(500).json({ error: 'Internal server error' });
        }

        res.status(201).json({ message: 'Donee registered successfully' });
    });
});


// 2. Login donee
app.post('/api/donee/login', (req, res) => {
    const { email, passwd } = req.body;

    // Check if the email exists
    const checkEmailQuery = 'SELECT * FROM donee WHERE email = ?';
    con.query(checkEmailQuery, [email], (err, donee) => {
        if (err) {
            console.error('Error checking email:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (donee.length === 0) {
            return res.status(401).json({ error: 'Invalid email or passwd' });
        }

        // Compare passwords directly
        if (passwd !== donee[0].passwd) {
            return res.status(401).json({ error: 'Invalid email or passwd' });
        }

        const { doneeId, doneeName, email } = donee[0];
        res.json({ message: 'Login successful', doneeId, doneeName, email });
    });
});

// 3. Get donee Details by donee ID
app.get('/api/donees/:id', (req, res) => {
    const doneeId = req.params.id;
    const getDoneeQuery = 'SELECT * FROM donee WHERE doneeId = ?';

    con.query(getDoneeQuery, [doneeId], (err, donees) => {
        if (err) {
            console.error('Error getting donee details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (donees.length === 0) {
            return res.status(404).json({ error: 'Donee not found' });
        }

        res.json(donees[0]);
    });
});

// 4. Get All donees Details
app.get('/api/donees', (req, res) => {
    const getAllDoneesQuery = 'SELECT * FROM donee';

    con.query(getAllDoneesQuery, (err, donees) => {
        if (err) {
            console.error('Error getting all donees:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json(donees);
    });
});

// 5. Update donee Details by donee ID
app.put('/api/donee/:id', (req, res) => {
    const doneeId = req.params.id;
    const { doneeName, latitude, longitude, geohash, passwd } = req.body;

    const updateDoneeQuery = 'UPDATE donee SET doneeName = ?, latitude = ?, longitude = ?, geohash = ?, passwd = ? WHERE doneeId = ?';
    con.query(updateDoneeQuery, [doneeName, latitude, longitude, geohash, passwd, doneeId], (err, updateDoneeResult) => {
        if (err) {
            console.error('Error updating donee details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (updateDoneeResult.affectedRows === 0) {
            return res.status(404).json({ error: 'Donee not found' });
        }

        res.json({ message: 'Donee updated successfully' });
    });
});

// =========DONEE API  END=============================

// =========DONATION API =============================
// 1. Add donation
app.post('/api/donation', (req, res) => {
    const { donorId, donationName, donationType, noOfDonations, donationDescription, donationExpiry, donationPickupLatitude, donationPickupLongitude, donationPickupGeohash } = req.body;

    // console.log(req.body);

    const addDonationProcedure = 'CALL AddDonation(?, ?, ?, ?, ?, ?, ?, ?, ?)';

    con.query(addDonationProcedure, [donorId, donationName, donationType, noOfDonations, donationDescription, donationExpiry, donationPickupLatitude, donationPickupLongitude, donationPickupGeohash], (err) => {
        if (err) {


            console.error('Error adding donation:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.status(200).json({ message: 'Donation added successfully' });
    });

});


// 2. Delete donation
app.delete('/api/donation/:id', (req, res) => {
    const donationId = req.params.id;

    const deleteDonationQuery = 'DELETE FROM donation WHERE donationId = ?';

    con.query(deleteDonationQuery, [donationId], (err, deleteDonationResult) => {
        if (err) {
            console.error('Error deleting donation:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (deleteDonationResult.affectedRows === 0) {
            return res.status(404).json({ error: 'Donation not found' });
        }

        res.status(200).json({ message: 'Donation deleted successfully' });
    });
});

// 3. Update donation
app.put('/api/donation/:id', (req, res) => {
    const donationId = req.params.id;
    const {
        donorId,
        donationName,
        donationType,
        noOfDonations,
        donationDescription,
        donationExpiry,
        donationPickupLatitude,
        donationPickupLongitude,
        donationPickupGeohash
    } = req.body;

    // Call the stored procedure with cursor
    const updateDonationWithCursorQuery = 'CALL UpdateDonationWithCursor(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    con.query(
        updateDonationWithCursorQuery,
        [
            donationId,
            donorId,
            donationName,
            donationType,
            noOfDonations,
            donationDescription,
            donationExpiry,
            donationPickupLatitude,
            donationPickupLongitude,
            donationPickupGeohash
        ],
        (err, updateDonationResult) => {
            if (err) {
                console.error('Error updating donation with cursor:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }

            res.json({ message: 'Donation updated successfully' });
        }
    );
});


// 4. Get Single donation
app.get('/api/donations/:id', (req, res) => {
    const donationId = req.params.id;

    const getDonationQuery = 'SELECT * FROM donation WHERE donationId = ?';

    con.query(getDonationQuery, [donationId], (err, donations) => {
        if (err) {
            console.error('Error getting donation details:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (donations.length === 0) {
            return res.status(404).json({ error: 'Donation not found' });
        }

        res.json(donations[0]);
    });
});

// 5. Get All donations
app.get('/api/donations', (req, res) => {
    const getAllDonationsQuery = 'SELECT * FROM donation';

    con.query(getAllDonationsQuery, (err, donations) => {
        if (err) {
            console.error('Error getting all donations:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json(donations);
    });
});

// 5. Get donations by donor ID
app.get('/api/donations/donor/:donorId', (req, res) => {
    const donorId = req.params.donorId;
    const getDonationsByDonorIdQuery = 'SELECT * FROM donation WHERE donorId = ?';

    con.query(getDonationsByDonorIdQuery, [donorId], (err, donations) => {
        if (err) {
            console.error('Error getting donations by donor ID:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json(donations);
    });
});
// =========DONATION API  END=============================

// =========FEEDBACK API =============================

// 1. Add Feedback
app.post('/api/feedback', (req, res) => {
    const { donationId, feedbackTitle, feedbackDescription, doneeId } = req.body;

    const addFeedbackProcedure = 'CALL AddFeedback(?, ?, ?, ?)';
    con.query(addFeedbackProcedure, [donationId, feedbackTitle, feedbackDescription, doneeId], (err) => {
        if (err) {
            console.error('Error adding feedback:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.status(201).json({ message: 'Feedback added successfully' });
    });
});


// 2. Get Feedback
app.get('/api/feedbacks/', (req, res) => {

    const getFeedbacksQuery = 'SELECT * FROM feedback';

    con.query(getFeedbacksQuery, (err, feedbacks) => {
        if (err) {
            console.error('Error getting feedbacks from donation ID:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json(feedbacks);
    });
});

// 3. Get Feedback from donation ID
app.get('/api/feedbacks/:id', (req, res) => {
    const donationId = req.params.id;

    const getFeedbacksQuery = 'SELECT * FROM feedback WHERE donationId = ?';

    con.query(getFeedbacksQuery, [donationId], (err, feedbacks) => {
        if (err) {
            console.error('Error getting feedbacks from donation ID:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json(feedbacks);
    });
});


// =========FEEDBACK API  END=============================
// =========REVIEW API =============================

// 1. Add Review
app.post('/api/review', (req, res) => {
    const { doneeId, donorId, reviewTitle, reviewDescription, rating } = req.body;

    const addReviewProcedure = 'CALL AddReview(?, ?, ?, ?, ?)';
    con.query(addReviewProcedure, [doneeId, donorId, reviewTitle, reviewDescription, rating], (err) => {
        if (err) {
            console.error('Error adding review:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.status(201).json({ message: 'Review added successfully' });
    });
});


// 2. Get All Reviews by donor ID
app.get('/api/reviews/:id', (req, res) => {
    const donorId = req.params.id;

    const getReviewsQuery = 'SELECT * FROM review WHERE donorId = ?';

    con.query(getReviewsQuery, [donorId], (err, reviews) => {
        if (err) {
            console.error('Error getting reviews by donor ID:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json(reviews);
    });
});


// =========REVIEW API  END=============================



app.listen(5000, () => {
    console.log("listening on port 5000");
})
