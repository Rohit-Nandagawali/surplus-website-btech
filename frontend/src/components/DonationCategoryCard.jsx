import React from 'react'
import { Link } from 'react-router-dom'

export default function DonationCategoryCard() {
    return (

        <div className="max-w-sm p-6 bg-gradient-to-r from-mainColor  to-orange-400 border-2 border-mainColor/10 rounded-lg shadow-lg hover:border-2 hover:border-mainColor text-white ">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Dry fruits</h5>
            </a>
            <p className="mb-3 font-normal ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Link to={'/donee/dashboard/dry_fruits'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-mainColor border-2 border-mainColor bg-white  shadow-lg  rounded-lg focus:ring-4 focus:outline-none focus:ring-orange-300">
                Get
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>

    )
}
