'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';



const properties = () => {


    const [propertyList, setpropertyList] = useState([]);

    const fetchproperty = () => {

        axios.get('http://localhost:5000/sites/getall')
            .then((res) => {
                console.log(res.data);
                setpropertyList(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }



    useEffect(() => {
        fetchproperty();
    }, []);



    const cards = () => {

        if (propertyList.length === 0) {
            return <p className='flex bg-gray-200 items-center h-screen
            text-xl font-bold justify-center'>Loading.....</p>
        }
        else {
            return <div className='grid grid-cols-3 p-8 h-full w-full justify-center items-center'>
                {(propertyList.map((prop) => {

                    return <div className='col-span-1 mb-8 mx-4 border w-auto border-gray-950 rounded-lg h-96 shadow-lg shadow-slate-500  justify-center items-center '>

                        <div className='rounded-lg h-[60%]'>

                            <img className='border object-cover h-full w-full rounded-t-lg' src="https://res.cloudinary.com/dbugkyyly/image/upload/v1727331256/house_no_1_img_1_ypamos.jpg" alt="" />
                        </div>

                        <div className='bg-white h-[35%] rounded-b-lg'>

                            <h1 className='text-gray-800 text-xl font-semibold pt-1 pl-1 hover:underline hover:text-gray-950'>{prop.name}</h1>
                            <h1 className='text-gray-900 text-sm font-semibold pt-1 pl-1 hover:underline hover:text-gray-950'>
                                {prop.address}
                            </h1>

                            <div className='flex p-1 gap-1'>

                                <h1 className='font-semibold text-lg text-gray-900 '>TYPE :</h1>
                                <div className=' border bg-gray-100 font-bold shadow-xl border-gray-200'>
                                    {prop.type}
                                </div>

                            </div>

                            <div className='flex justify-between w-full px-1 mt-1 items-center'>

                                <h1 className='text-lg text-gray-900 font-bold'>Price : {prop.price}</h1>

                                <Link href={"/productDetails/" + prop._id} className='border bg-gray-800 text-white font-semibold w-[40%] h-7 text-center rounded-2xl '>Buy Now</Link>

                            </div>

                        </div>

                    </div>

                }))

                }

            </div>
        }
    }

    return (
        <div className='grid grid-cols-12'>

            <div className=' col-span-1  bg-gray-50'>
                
                <div className='border fixed bg-gray-300 rounded-lg text-center mx-1 p-1 mt-5'>
                    ALL PROPERTIES
                </div>
            </div>
            <div className='mt-1 col-span-11 h-auto'>
                {cards()}
            </div>
        </div>
    )
}

export default properties