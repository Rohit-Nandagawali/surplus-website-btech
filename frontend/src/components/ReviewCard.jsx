import React, { useEffect, useState } from 'react'
import { getSingleDonee } from '../api/donee'

export default function ReviewCard({ text, description, byUserId, type, rating }) {
    const [doneeDetails, setDoneeDetails] = useState()

    useEffect(() => {
        const getCommentor = async () => {


            let donee = await getSingleDonee(byUserId)
            setDoneeDetails(donee?.data)
            // console.log("donee", donee);
        }
        getCommentor()

    }, [])

    return (

        <div className=" min-w-[60%] border p-4 rounded-lg shadow-lg">

            <blockquote>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">"{text}"</p>
                <p className='text-base font-normal text-gray-500 dark:text-white'>{description}</p>

                {
                    type === "review" &&
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{rating}</p>

                    </div>
                }
            </blockquote>
            <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">{doneeDetails?.doneeName}</cite>

                </div>
            </figcaption>

        </div>

    )
}
