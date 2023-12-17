import React, { useEffect, useState } from 'react'
import CustomeInput from '../../components/utility/CustomeInput'
import DashboardNav from '../../components/DashboardNav'
import toast, { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { getSingleDonor } from '../../api/donee'
import ReviewCard from '../../components/ReviewCard'
import { useNavigate } from 'react-router-dom'
import EditDonorProfile from '../../components/EditDonorProfile'
import { getSingleDonee } from '../../api/donee'
import EditDoneeProfile from '../../components/EditDoneeProfile'


export default function MyDoneeProfile() {

    const { doneeId } = useParams()
    const navigate = useNavigate()



    const [doneeDetails, setDoneeDetails] = useState()
    const [togglePages, setTogglePages] = useState('viewProfile')




    const donee = localStorage.getItem('donee');

    useEffect(() => {
        const getDonorDetails = async () => {

            let donee = await getSingleDonee(doneeId)
            setDoneeDetails(donee?.data)

        }

        if (!donee) {
            navigate("/donee_login");
        } else {

            getDonorDetails()
        }



    }, [])

    useEffect(() => {
        const getDonorDetails = async () => {

            let donee = await getSingleDonee(doneeId)
            setDoneeDetails(donee?.data)
            toast.success("Donee Profile Fetched")
        }
        getDonorDetails()

    }, [togglePages])

    const handleLogOut = () => {
        localStorage.removeItem('donee');
        setTimeout(() => {
            navigate("/donee_login");
        }, 2000);
    }

    const handleEditProfile = () => {
        setTogglePages('EditProfile')
    }

    return (
        <div className="">
            <DashboardNav user={"donee"} />
            <Toaster />
            {
                togglePages === "viewProfile"
                    ?
                    <div className="px-16 py-10 pt-32 w-4/5">
                        <div className="flex justify-between items-center gap-4">
                            <div className="">
                                <div className="mt-3">
                                    <div className="text-xs">Donee's Name</div>
                                    <h1 className='font-bold'>{doneeDetails?.doneeName}</h1>
                                </div>

                                <div className="mt-3">
                                    <div className="text-xs">Donee's Email Address</div>
                                    <h1 className='font-bold'>{doneeDetails?.email}</h1>
                                </div>

                            </div>
                            <div onClick={handleEditProfile} className="flex flex-col gap-6">
                                <button className='text-white bg-gradient-to-br from-green-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-xl text-base text-center shadow-lg shadow-green-400/40 px-4 py-2'>Edit Profile</button>

                                <button onClick={handleLogOut} className='text-white bg-gradient-to-br from-red-500 to-pink-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-red-800 font-medium rounded-xl text-base text-center shadow-lg shadow-red-400/40 px-4 py-2'>Log Out</button>

                            </div>
                        </div>




                    </div> : <EditDoneeProfile setTogglePages={setTogglePages} togglePages={togglePages} />
            }




        </div>
    )
}
