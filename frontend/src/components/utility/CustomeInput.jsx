import React, { useEffect, useState } from 'react'

export default function CustomeInput({ id, label, placeholder, value, type, setValue }) {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {

        setInputValue(value)
    })

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
        setValue(e.target.value)
    }
    return (
        <div>
            <label htmlFor={id} className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input
                type={type}
                id={id}
                value={inputValue}
                onChange={handleOnChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder} />
        </div>
    )
}
