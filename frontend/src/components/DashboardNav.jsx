import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import nameOfWebsite from '../data/constants'
import Logo from '../assets/Logo'

export default function DashboardNav({ user }) {


    // console.log('loging from nav', user);

    const [userType, setUserType] = useState()
    const [userId, setUserId] = useState()

    const setNavData = () => {
        if (user === 'donee') {
            const donee = localStorage.getItem('donee');
            setUserType('donee')
            // console.log(JSON.parse(donee)?.doneeId);
            setUserId(JSON.parse(donee)?.doneeId)

        }
        else if (user === 'donor') {
            const donor = localStorage.getItem('donor');
            setUserType('donor')
            setUserId(JSON.parse(donor)?.donor?.donorId)
            // console.log("donor id", userId);

        }



    }

    useEffect(() => {

        setNavData()
    }, [])


    return (


        <nav className="bg-white fixed w-screen border-gray-200 dark:bg-gray-900 px-10 shadow-lg z-10">
            <div className=" flex flex-wrap items-center justify-between mx-auto p-4 ">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Logo width={50} height={50} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{nameOfWebsite}</span>
                </Link>

                <div className="">
                    {
                        userId &&
                        <Link to={`/${user}/dashboard/myprofile/${userId}`} className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" alt="avatar" />
                            </button>
                        </Link>


                    }

                </div>


            </div>
        </nav>

    )
}
