import React from 'react'
import { Link } from 'react-router-dom'

export default function MainButton({ text, onClick, extraClasse, to }) {
    return (
        <div className="flex justify-center items-center">

            <div onClick={onClick} className={`w-full text-white bg-mainColor hover:bg-mainColor/90  shadow-lg shadow-mainColor/30 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer ${extraClasse}`}>{text}</div>
        </div>
    )
}
