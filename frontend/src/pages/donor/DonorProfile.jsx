import React from 'react'
import CustomeInput from '../../components/utility/CustomeInput'
import DashboardNav from '../../components/DashboardNav'
import MainButton from '../../components/utility/MainButton'
import ReviewCard from '../../components/ReviewCard'


export default function DonorProfile() {
    return (
        <div >
            <DashboardNav user={"donor"} />
            <div className="px-16 py-10 pt-32 w-4/5">
                <h1 className='font-semibold text-2xl'>Your Profile</h1>
                <CustomeInput label={"email"} placeholder={"email"} type={"email"} />
                <CustomeInput label={"password"} placeholder={"password"} type={"password"} />
                <div className="flex gap-4">

                    <CustomeInput label={"Name"} placeholder={"email"} type={"email"} />
                    <CustomeInput label={"email"} placeholder={"email"} type={"email"} />
                </div>
                <div className="flex gap-4">

                    <CustomeInput label={"Name"} placeholder={"email"} type={"email"} />
                    <CustomeInput label={"email"} placeholder={"email"} type={"email"} />
                </div>
                <div className="w-fit">

                    <MainButton extraClasse={"mt-4 "} text={"Update"} />
                </div>
            </div>
            <div className="my-20">
                <h1 className='px-20 font-semibold text-2xl'>Reviews</h1>
                <div className="my-2 mx-20 overflow-x-scroll flex gap-4 py-10">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />

                </div>
            </div>

        </div>
    )
}
