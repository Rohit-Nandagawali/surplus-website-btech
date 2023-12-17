import React, { useEffect, useState } from 'react'
import CustomeInput from '../components/utility/CustomeInput'
import MainButton from '../components/utility/MainButton'
import toast, { Toaster } from 'react-hot-toast'
import { getSingleDonee, updateDonee } from '../api/donee'

import { useNavigate, useParams } from 'react-router-dom'


export default function EditDoneeProfile({ togglePages, setTogglePages }) {

    const { doneeId } = useParams()

    const [doneeName, setDoneeName] = useState()
    const [email, setEmail] = useState()
    const [passwd, setPasswd] = useState()
    // const [doneeId, setDonorId] = useState()

    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [geohash, setGeohash] = useState()
    const [doneeDetails, setDonorDetails] = useState()

    const navigate = useNavigate()


    useEffect(() => {

        // const doneeDetailsFetched = JSON.parse(localStorage.getItem('donee'))


        const getDonorData = async () => {
            const doneeDetailsFetched = await getSingleDonee(doneeId)
            // console.log(doneeDetailsFetched?.data);
            // setDonorDetails(doneeDetailsFetched?.donee);


            setDoneeName(doneeDetailsFetched?.data?.doneeName)
            setEmail(doneeDetailsFetched?.data?.email)
            setPasswd(doneeDetailsFetched?.data?.passwd)
            setLatitude(doneeDetailsFetched?.data?.latitude)
            setLongitude(doneeDetailsFetched?.data?.longitude)
            setGeohash(doneeDetailsFetched?.data?.geohash)

        }

        getDonorData()

    }, [togglePages])

    const handleViewProfile = () => {
        setTogglePages('viewProfile')
    }


    const handleProfileUpdate = async () => {


        if (!doneeName || !email || !passwd || !latitude || !longitude || !geohash) {
            toast.error("Fields cannot be empty")
        }
        else {
            try {
                let res = await updateDonee(
                    doneeId, doneeName, latitude, longitude, geohash, passwd)

                if (res.status === 200) {
                    toast.success("Donee Profile update successfully")

                    setTogglePages('viewProfile')
                }
                else {
                    toast.error("Donee Profile updation failed")
                }
            } catch (error) {
                toast.error("Donee Profile updation failed ")
            }
        }

    }



    return (
        <div className="px-16 py-10 pt-32 w-4/5">
            <div className="space-y-4 md:space-y-6" >
                <Toaster />

                <button onClick={handleViewProfile} className="py-2 px-4 rounded-full bg-gray-200 border hover:bg-gray-100">Back</button>

                <CustomeInput value={doneeName} setValue={setDoneeName} placeholder={"Your Name"} id={"name"} type={"text"} />
                <CustomeInput value={email} setValue={setEmail} placeholder={"Your email"} id={"email"} type={"email"} />

                <CustomeInput value={passwd} setValue={setPasswd} placeholder={"••••••••"} id={"password"} type={"password"} />

                <div className="flex gap-x-4">

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
                <CustomeInput
                    value={geohash}
                    setValue={setGeohash}
                    label={'Geohash'}
                    placeholder={'Enter geohash'}
                    type={'text'}
                    name={'Geohash'}
                />

                <div className="w-fit">

                    <MainButton onClick={handleProfileUpdate} extraClasse={"mt-4 "} text={"Update Profile"} />
                </div>



            </div>
        </div>
    )
}
