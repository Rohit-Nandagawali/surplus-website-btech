import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomeInput from '../../components/utility/CustomeInput'
import MainButton from '../../components/utility/MainButton'
import toast, { Toaster } from 'react-hot-toast'
import { loginDonee, registerDonee } from '../../api/donee'
import { useNavigate } from 'react-router-dom'


export default function DoneeRegister() {



    const [doneeName, setDoneeName] = useState()
    const [email, setEmail] = useState()
    const [passwd, setPasswd] = useState()

    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [geohash, setGeohash] = useState()

    const navigate = useNavigate()

    const donee = localStorage.getItem('donee');
    useEffect(() => {
        if (donee) {
            navigate("/donee/dashboard");
        }

    }, [])



    const handleDoneeRegister = async () => {
        if (!doneeName || !email || !passwd || !latitude || !longitude || !geohash) {

            toast.error("Please enter all the fields")
        } else {
            let res = await registerDonee(doneeName, latitude, longitude, geohash, email, passwd)
            try {
                if (res.status === 201) {
                    toast.success("Registered sucessfully")

                    let res = await loginDonee(email, passwd)

                    localStorage.setItem('donee', JSON.stringify(res.data));
                    setTimeout(() => {
                        navigate("/donee/dashboard");
                    }, 2000);

                }
                console.log(res);

            } catch (error) {
                toast.error("Error while calling api" + error)
            }
        }

    }


    return (
        <section className="mt-20 bg-gray-50 dark:bg-gray-900">
            <Toaster />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full  shadow-lg bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 border">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <CustomeInput value={doneeName} setValue={setDoneeName} placeholder={"Your Name"} id={"name"} type={"text"} />
                            <CustomeInput value={email} setValue={setEmail} placeholder={"Your email"} id={"email"} type={"email"} />

                            <div className="flex gap-4">

                                <CustomeInput
                                    value={latitude}
                                    setValue={setLatitude}
                                    label={'Latitude'}
                                    placeholder={'Enter latitude'}
                                    type={'number'}
                                    name={'Latitude'}
                                />
                                <CustomeInput
                                    value={longitude}
                                    setValue={setLongitude}
                                    label={'Longitude'}
                                    placeholder={'Enter lotitude'}
                                    type={'number'}
                                    name={'Latitude'}
                                />

                            </div>

                            <CustomeInput value={passwd} label={"Password"} setValue={setPasswd} placeholder={"••••••••"} id={"password"} type={"password"} />

                            <CustomeInput
                                value={geohash}
                                setValue={setGeohash}
                                label={'Geohash'}
                                placeholder={'Enter geohash'}
                                type={'text'}
                                name={'geohash'}
                            />

                            <MainButton onClick={handleDoneeRegister} to={'/donee/dashboard/'} text={'Create a Donee account'} />


                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to={'/donee_login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login as Donee</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
