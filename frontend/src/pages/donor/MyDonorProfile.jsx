import React, { useEffect, useState } from 'react'
import CustomeInput from '../../components/utility/CustomeInput'
import DashboardNav from '../../components/DashboardNav'
import toast, { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { getSingleDonor } from '../../api/donor'
import { getReviewsByDonorId } from '../../api/review'
import ReviewCard from '../../components/ReviewCard'
import { useNavigate } from 'react-router-dom'
import EditDonorProfile from '../../components/EditDonorProfile'


export default function MyDonorProfile() {

    const { donorId } = useParams()
    const navigate = useNavigate()



    const [donorDetails, setDonorDetails] = useState()
    const [togglePages, setTogglePages] = useState('viewProfile')


    // reviewTitle, reviewDescription,

    const [doneeId, setDoneeId] = useState()


    const [reviews, setReviews] = useState()

    const donor = localStorage.getItem('donor');

    useEffect(() => {
        const getDonorDetails = async () => {

            let donor = await getSingleDonor(donorId)
            setDonorDetails(donor?.data)
            // toast.success("Donor Profile Fetched")

            let fetchReviews = await getReviewsByDonorId(donorId)
            setReviews(fetchReviews?.data)
            // console.log(reviews);
        }

        if (!donor) {
            navigate("/donor_login");
        } else {

            getDonorDetails()
        }



    }, [])

    useEffect(() => {
        const getDonorDetails = async () => {

            let donor = await getSingleDonor(donorId)
            setDonorDetails(donor?.data)
            toast.success("Donor Profile Fetched")
        }
        getDonorDetails()

    }, [togglePages])

    const handleLogOut = () => {
        localStorage.removeItem('donor');
        // setTimeout(() => {
        navigate("/donor_login");
        // }, 2000);
    }

    const handleEditProfile = () => {
        setTogglePages('EditProfile')
    }

    return (
        <div className="">
            <DashboardNav user={"donor"} />
            <Toaster />
            {
                togglePages === "viewProfile"
                    ?
                    <div className="px-16 py-10 pt-32 w-4/5">
                        <div className="flex justify-between items-center gap-4">
                            <div className="">
                                <div className="mt-3">
                                    <div className="text-xs">Donor's Name</div>
                                    <h1 className='font-bold'>{donorDetails?.name}</h1>
                                </div>
                                <div className="mt-3">
                                    <div className="text-xs">Donor's Rating</div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{donorDetails?.avgRatings}</p>

                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="text-xs">Donor's Email Address</div>
                                    <h1 className='font-bold'>{donorDetails?.email}</h1>
                                </div>
                                <div className="mt-3">
                                    <div className="text-xs">Donor's Organization </div>
                                    <h1 className='font-bold'>{donorDetails?.orgName}</h1>
                                </div>
                            </div>
                            <div onClick={handleEditProfile} className="flex flex-col gap-6">
                                <button className='text-white bg-gradient-to-br from-green-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-xl text-base text-center shadow-lg shadow-green-400/40 px-4 py-2'>Edit Profile</button>

                                <button onClick={handleLogOut} className='text-white bg-gradient-to-br from-red-500 to-pink-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-red-800 font-medium rounded-xl text-base text-center shadow-lg shadow-red-400/40 px-4 py-2'>Log Out</button>

                            </div>
                        </div>

                        <hr className="w-[70%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700" />

                        <div className="my-20 mt-1">
                            <h1 className=' font-semibold text-2xl'>Reviews <span className='bg-mainColor
 px-2 rounded-full h-4 w-4 ml-2 text-white'>
                                {reviews?.length ? reviews?.length : 0}</span></h1>


                            {
                                reviews ?
                                    <div className="my-5 mx-20 overflow-x-scroll flex gap-4 py-10">
                                        {
                                            reviews?.map((review, index) => (

                                                <ReviewCard key={index} text={review.reviewTitle} type={"review"} rating={review?.rating} description={review.reviewDescription} byUserId={review.doneeId} />
                                            ))
                                        }


                                    </div> :
                                    <h1 className='text-lg'>No Reviews yet, Add your review</h1>
                            }

                        </div>


                    </div> : <EditDonorProfile setTogglePages={setTogglePages} togglePages={togglePages} />
            }




        </div>
    )
}
