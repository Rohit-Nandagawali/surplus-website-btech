import axios from 'axios';
import { API_URL } from '../data/constants';


// get all donations
export const getAllDonations = async () => {
    try {

        const responce = await axios.get(`${API_URL}/donations`);
        return responce

    } catch (error) {
        console.error('Data fetching failed:', error);
    }
}
// get single donations
export const getSingleDonation = async (donationId) => {
    try {

        const responce = await axios.get(`${API_URL}/donations/${donationId}`);
        return responce

    } catch (error) {
        console.error('Data fetching failed:', error);
    }
}
// get donations by donor id
export const getDonationsByDonor = async (donorId) => {
    try {

        const responce = await axios.get(`${API_URL}/donations/donor/${donorId}`);
        return responce

    } catch (error) {
        console.error('Data fetching failed:', error);
    }
}
// create a new donation
export const createNewDonation = async (donorId, donationName, donationType, noOfDonations, donationDescription, donationExpiry, donationPickupLatitude, donationPickupLongitude, donationPickupGeohash) => {

    try {

        const responce = await axios.post(`${API_URL}/donation`, { donorId, donationName, donationType, noOfDonations, donationDescription, donationExpiry, donationPickupLatitude, donationPickupLongitude, donationPickupGeohash });
        return responce

    } catch (error) {
        console.error('Data inserting failed client:', error);
    }
}


// update donation
export const updateDonation = async (donationId, donorId, donationName, donationType, noOfDonations, donationDescription, donationExpiry, donationPickupLatitude, donationPickupLongitude, donationPickupGeohash) => {

    try {

        const responce = await axios.put(`${API_URL}/donation/${donationId}`, { donorId, donationName, donationType, noOfDonations, donationDescription, donationExpiry, donationPickupLatitude, donationPickupLongitude, donationPickupGeohash });
        return responce

    } catch (error) {
        console.error('Data inserting failed client:', error);
    }
}

// delete donation
export const deleteDonation = async (donationId) => {

    try {

        const responce = await axios.delete(`${API_URL}/donation/${donationId}`);
        return responce

    } catch (error) {
        console.error('Data deleting failed client:', error);
    }
}