import React, { useEffect, useState } from 'react'
import MainButton from '../../components/utility/MainButton'
import CustomeInput from '../../components/utility/CustomeInput'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { loginDonor } from '../../api/donor'
import circle from '../../assets/circle.svg'

export default function DonorLogin() {


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()


    const donor = localStorage.getItem('donor');
    useEffect(() => {
        if (donor) {
            navigate("/donor/dashboard");
        }

    }, [])

    const handleDonorLogin = async () => {
        // console.log(email, password);
        if (!email || !password) {
            if (!email)
                toast.error("Email cannot be empty")
            if (!password)
                toast.error("Password cannot be empty")
        } else {
            // making donee login api request
            try {

                let res = await loginDonor(email, password)

                if (res.status === 200) {
                    toast.success("Login sucessful")
                    // console.log(res.data)
                    localStorage.setItem('donor', JSON.stringify(res?.data));
                    setTimeout(() => {
                        navigate("/donor/dashboard");
                    }, 2000);

                }
                else if (res?.response?.status === 401) {
                    toast.error("Invalid Credentials")
                }
                else if (res?.response?.status === 500) {
                    toast.error("Internal server error! \n Please try after some time\nWe are getting to many requests")
                }
            } catch (error) {
                console.log(error);
                toast.error("Login Failed")
            }
        }
    }

    return (
        <section className="bg-mainColor/10 dark:bg-gray-900 relative">

            <img src={circle} className='z-0 w-screen h-screen object-cover absolute top-0' alt="background" />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Toaster />

                <div className="z-10  w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 border">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome Back !
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <CustomeInput value={email} setValue={setEmail} placeholder={"Your email"} id={"email"} type={"email"} />

                            <CustomeInput value={password} setValue={setPassword} placeholder={"••••••••"} id={"password"} type={"password"} />



                            <MainButton onClick={handleDonorLogin} to={'/donor/dashboard/'} text={'Login as Donor'} />

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account? <Link to={'/donor_register'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
