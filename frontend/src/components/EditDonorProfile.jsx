import React, { useEffect, useState } from 'react'
import CustomeInput from '../components/utility/CustomeInput'
import MainButton from '../components/utility/MainButton'
import toast, { Toaster } from 'react-hot-toast'
import { getSingleDonor, updateDonor } from '../api/donor'

import { useNavigate, useParams } from 'react-router-dom'


export default function EditDonorProfile({ togglePages, setTogglePages }) {

    const { donorId } = useParams()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [passwd, setPasswd] = useState()
    const [orgName, setOrgName] = useState()
    // const [donorId, setDonorId] = useState()

    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [geohash, setGeohash] = useState()
    const [donorDetails, setDonorDetails] = useState()

    const navigate = useNavigate()


    useEffect(() => {

        // const donorDetailsFetched = JSON.parse(localStorage.getItem('donor'))


        const getDonorData = async () => {
            const donorDetailsFetched = await getSingleDonor(donorId)
            // console.log(donorDetailsFetched?.data);
            // setDonorDetails(donorDetailsFetched?.donor);


            // setDonorId(donorDetailsFetched?.donor?.donorId)
            setName(donorDetailsFetched?.data?.name)
            setEmail(donorDetailsFetched?.data?.email)
            setPasswd(donorDetailsFetched?.data?.passwd)
            setOrgName(donorDetailsFetched?.data?.orgName)
            setLatitude(donorDetailsFetched?.data?.latitude)
            setLongitude(donorDetailsFetched?.data?.longitude)
            setGeohash(donorDetailsFetched?.data?.geohash)

        }

        getDonorData()

    }, [togglePages])

    const handleViewProfile = () => {
        setTogglePages('viewProfile')
    }


    const handleProfileUpdate = async () => {


        if (!name || !email || !passwd || !orgName || !latitude || !longitude || !geohash) {
            toast.error("Fields cannot be empty")
        }
        else {
            try {
                let res = await updateDonor(
                    donorId, name, orgName, latitude, longitude, geohash, passwd)

                if (res.status === 200) {
                    toast.success("Donor Profile update successfully")

                    setTogglePages('viewProfile')
                }
                else if (res?.response?.status === 500) {
                    toast.error("Internal server error! \n Please try after some time\nWe are getting too many requests")
                }
                else {
                    toast.error("Donor Profile updation failed")
                }

            } catch (error) {
                toast.error("Donor Profile updation failed ")
            }
        }

    }



    return (
        <div className="px-16 py-10 pt-32 w-4/5">
            <div className="space-y-4 md:space-y-6" >
                <Toaster />

                <button onClick={handleViewProfile} className="py-2 px-4 rounded-full bg-gray-200 border hover:bg-gray-100">Back</button>

                <CustomeInput value={name} setValue={setName} placeholder={"Your Name"} id={"name"} type={"text"} />
                <CustomeInput value={email} setValue={setEmail} placeholder={"Your email"} id={"email"} type={"email"} />
                <CustomeInput value={orgName} setValue={setOrgName} placeholder={"Your organization name"} id={"orgName"} type={"text"} />

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
