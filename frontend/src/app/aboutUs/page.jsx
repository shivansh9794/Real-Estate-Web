import React from 'react'

const aboutUs = () => {
    return (
        <div className='w-full h-screen bg-gray-50 items-center justify-center'>
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.imgur.com/WbQnbas.png" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
                        </h2>
                        <p className="text-gray-700">
                            reSide is a leading real estate firm dedicated to providing exceptional services to our clients. With 2 years of experience in the industry, we have built a reputation for excellence, integrity, and customer satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutUs