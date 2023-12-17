import React from 'react'
import DonationCard from '../../components/DonationCard'
import DashboardNav from '../../components/DashboardNav'

export default function AvailbaleDonations() {
    return (
        <div>
            <DashboardNav user={"donee"} />
            <div className="px-16 py-10 pt-32">

                <h1 className='text-3xl font-semibold'>Your Dry Fruits Donations</h1>

                <div className="my-4 grid grid-cols-3 gap-6">
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                    <DonationCard />
                </div>
            </div>

        </div>
    )
}
