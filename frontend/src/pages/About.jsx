import React from 'react'

export default function About() {
    return (
        <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-lg mt-20">
            <h1 className="text-3xl font-bold mb-4">About Surplus</h1>

            <p className="text-gray-700 leading-loose">
                Welcome to Surplus, your dedicated platform for food donation and assistance.
                At Surplus, we're committed to minimizing food waste and ensuring that surplus food
                reaches those who need it the most.
            </p>

            <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Our Mission</h2>
                <p className="text-gray-700 leading-loose">
                    Surplus is on a mission to bridge the gap between surplus food and those in need.
                    Our goal is to provide a surplus of nourishment, support, and resources by
                    connecting donors with donees in a seamless and impactful way.
                </p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Who We Are</h2>
                <p className="text-gray-700 leading-loose">
                    The Surplus team is a passionate group committed to making a difference.
                    We bring together individuals with various skills and backgrounds to create a
                    platform that not only reduces food waste but also brings communities together.
                </p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">What Sets Us Apart</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Food Impact: We focus on making a direct impact by connecting surplus food with those in need.</li>
                    <li>User-Friendly Platform: Our website is designed to be easy to use, ensuring a seamless experience for donors and donees.</li>
                    <li>Community Connection: We foster a sense of community by encouraging engagement and collaboration.</li>
                </ul>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-2">Thank You</h2>

            </div>

            <p className="mt-8 text-gray-700">
                Thank you for being part of the Surplus community. Together, we can make a positive
                impact by ensuring that no surplus food goes to waste, and everyone gets the support
                they need.
            </p>
        </div>

    )
}
