import React, { useEffect, useState } from 'react'
import DashboardNav from '../../components/DashboardNav'
import CustomeInput from '../../components/utility/CustomeInput'
import MainButton from '../../components/utility/MainButton'
import toast, { Toaster } from 'react-hot-toast';
import { getSingleDonation, updateDonation } from '../../api/donation';
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment';



export default function UpdateDonation() {

    const { donationId } = useParams()


    const [donationName, setDonationName] = useState('');
    const [donationType, setDonationType] = useState('');
    const [noOfDonations, setNoOfDonations] = useState('');
    const [donationDescription, setDonationDescription] = useState('');
    const [donationExpiry, setDonationExpiry] = useState('');
    const [donationPickupLatitude, setDonationPickupLatitude] = useState('');
    const [donationPickupLongitude, setDonationPickupLongitude] = useState('');
    const [donationPickupGeohash, setDonationPickupGeohash] = useState('');

    const navigate = useNavigate()


    const donorDetails = JSON.parse(localStorage.getItem('donor'))

    const donorId = donorDetails?.donor?.donorId

    useEffect(() => {

        if (!donorDetails) {
            navigate('/donor_login')
        } else {
            const fetchDonation = async () => {

                const donationDetailsFetched = await getSingleDonation(donationId)
                // setDonationDetails(donationDetailsFetched.data)

                setDonationName(donationDetailsFetched.data?.donationName)
                setDonationType(donationDetailsFetched.data?.donationType)
                setNoOfDonations(donationDetailsFetched.data?.noOfDonations)
                setDonationDescription(donationDetailsFetched.data?.donationDescription)

                const originalDateString = donationDetailsFetched?.data?.donationExpiry;

                // Parse the original date string using moment
                const originalDate = moment(originalDateString);

                // Format the date in the desired format (yyyy-MM-dd)
                const formattedDate = originalDate.format('YYYY-MM-DD');

                setDonationExpiry(formattedDate)

                setDonationPickupLatitude(donationDetailsFetched.data?.donationPickupLatitude)
                setDonationPickupLongitude(donationDetailsFetched.data?.donationPickupLongitude)
                setDonationPickupGeohash(donationDetailsFetched.data?.donationPickupGeohash)

                // console.log(donationName);
                // console.log(donationDetailsFetched.data);
            }
            fetchDonation()

        }
    }, [])







    const handleUpdateDonation = async () => {
        // console.log( );

        if (!donationName || !donationType || !noOfDonations || !donationDescription || !donationExpiry || !donationPickupGeohash || !donationPickupLatitude || !donationPickupLongitude) {
            toast.error("Fields cannot be empty")
        }
        else {
            try {
                let res = await updateDonation(
                    donationId,
                    donorId,
                    donationName,
                    donationType,
                    noOfDonations,
                    donationDescription,
                    donationExpiry,
                    donationPickupLatitude,
                    donationPickupLongitude,
                    donationPickupGeohash)

                if (res.status === 200) {
                    toast.success("Donation update successfully")
                    navigate("/donor/dashboard")


                }
                else {
                    toast.error("Donation updation failed")
                }
            } catch (error) {
                toast.error("Donation updation failed catch")
            }
        }

    }


    return (
        <div>
            <DashboardNav user={"donor"} />
            <Toaster />
            <div className="px-16 py-10 pt-32 w-4/5">
                <h1 className='font-semibold text-2xl'>Update donation</h1>


                <CustomeInput value={donationName} setValue={setDonationName} label={"Donation Name"} placeholder={"Enter Donation Name"} type={"text"} />


                <CustomeInput
                    value={donationType}
                    setValue={setDonationType}
                    label={'Donation Type'}
                    placeholder={'Enter Donation Type'}
                    type={'text'}
                    name={'donationType'}

                />

                <CustomeInput
                    value={donationDescription}
                    setValue={setDonationDescription}
                    label={'Donation Description'}
                    placeholder={'Enter Donation Description'}
                    type={'text'}
                    name={'donationDescription'}
                />
                <div className="flex gap-4">

                    <CustomeInput
                        value={donationExpiry}
                        setValue={setDonationExpiry}
                        label={'Donation Expiry'}
                        placeholder={'Enter Donation Expiry'}
                        type={'date'}
                        name={'donationExpiry'}
                    />
                    <CustomeInput
                        value={noOfDonations}
                        setValue={setNoOfDonations}
                        label={'Number of Donations'}
                        placeholder={'Enter Number of Donations'}
                        type={'number'}
                        name={'noOfDonations'}
                    />
                </div>
                <div className="flex gap-4">

                    <CustomeInput
                        value={donationPickupLatitude}
                        setValue={setDonationPickupLatitude}

                        label={'Pickup Latitude'}
                        placeholder={'Enter Pickup Latitude'}
                        type={'text'}
                        name={'donationPickupLatitude'}
                    />
                    <CustomeInput
                        value={donationPickupLongitude}
                        setValue={setDonationPickupLongitude}
                        label={'Pickup Longitude'}
                        placeholder={'Enter Pickup Longitude'}
                        type={'text'}
                        name={'donationPickupLongitude'}
                    />
                </div>


                <CustomeInput
                    value={donationPickupGeohash}
                    setValue={setDonationPickupGeohash}
                    label={'Pickup Geohash'}
                    placeholder={'Enter Pickup Geohash'}
                    type={'text'}
                    name={'donationPickupGeohash'}
                />

                <div className="w-fit">

                    <MainButton onClick={handleUpdateDonation} extraClasse={"mt-4 "} text={"Update donation"} />
                </div>
            </div>
        </div>
    )
}
