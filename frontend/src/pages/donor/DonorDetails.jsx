import React, { useEffect, useState } from 'react'
import DashboardNav from '../../components/DashboardNav'
import { useParams } from 'react-router-dom'
import { getSingleDonor } from '../../api/donor'
import toast, { Toaster } from 'react-hot-toast'
import ReviewCard from '../../components/ReviewCard'
import CustomeInput from '../../components/utility/CustomeInput'


import { createNewReview, getReviewsByDonorId } from '../../api/review'

export default function DonorDetails() {
    const { donorId } = useParams()


    const [donorDetails, setDonorDetails] = useState()

    // reviewTitle, reviewDescription,
    const [reviewTitle, setReviewTitle] = useState()
    const [reviewDescription, setReviewDescription] = useState()
    const [rating, setRating] = useState()
    const [doneeId, setDoneeId] = useState()


    const [reviews, setReviews] = useState()
    useEffect(() => {
        const getDonorDetails = async () => {

            let donor = await getSingleDonor(donorId)
            setDonorDetails(donor?.data)
            toast.success("Donor Details Fetched")

            const donee = localStorage.getItem('donee');

            setDoneeId(JSON.parse(donee)?.doneeId)



            let fetchReviews = await getReviewsByDonorId(donorId)
            setReviews(fetchReviews?.data)
            // console.log(reviews);
        }
        getDonorDetails()


    }, [])


    const createReview = async () => {
        if (!reviewTitle || !reviewDescription || !rating) {
            toast.error("Enter all fields")

        }

        else {
            if (rating > 0 && rating < 6) {


                const res = await createNewReview(doneeId, donorId, reviewTitle, reviewDescription, rating)

                if (res.status === 201) {
                    toast.success("Review added successfully")

                    let fetchReviews = await getReviewsByDonorId(donorId)
                    setReviews(fetchReviews?.data)

                    setReviewTitle('')
                    setReviewDescription('')

                }

                else {
                    toast.error("Review Creation failed")
                }
            }
            else {
                toast.error("Rating must be between 1 to 5")
            }

        }
    }

    return (
        <div className="">
            <DashboardNav user={"donee"} />
            <Toaster />
            <div className="px-16 py-10 pt-32 w-4/5">
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



                <hr className="w-[70%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-gray-700" />

                <div className="my-20 mt-1">
                    <h1 className=' font-semibold text-2xl'>Reviews <span className='bg-mainColor
     px-2 rounded-full h-4 w-4 ml-2 text-white'>{reviews?.length}</span></h1>
                    <div className="">

                        <div>
                            <label htmlFor="chat" className="sr-only">Your message</label>
                            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 mx-20 mt-10 border">

                                <div className="w-[90%] mr-3">

                                    <CustomeInput value={reviewTitle} setValue={setReviewTitle} type='text' placeholder="Your review title..." />

                                    <CustomeInput value={reviewDescription} setValue={setReviewDescription} type='text' placeholder="Your review description..." />

                                    <CustomeInput value={rating} setValue={setRating} type='number' placeholder="Your rating out of 5..." />

                                </div>

                                <button onClick={createReview} className="inline-flex justify-center p-2 text-mainColor rounded-full cursor-pointer hover:bg-mainColor/10">
                                    <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                                    </svg>
                                    <span className="sr-only">Send message</span>
                                </button>
                            </div>
                        </div>

                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                    </div>

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


            </div>



        </div>
    )

}
