'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';



const topproperties = () => {


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
    

    const topProp = propertyList.filter(function filterprop(pro) {
        return pro.price > 10000000;
      });

    console.log(topProp.length);
    console.log(topProp);
    
    

    const cards = () => {
        if (topProp.length === 0) {
            return <p className='flex bg-gray-200 items-center h-screen
            text-xl font-bold justify-center'>Loading.....</p>
        }
        else {
            return <div className='grid grid-cols-3 h-full w-full justify-center items-center'>
                {(topProp.map((prop) => {

                    return <div className='col-span-1 m-6 border w-[90%] border-gray-950 rounded-lg shadow-lg shadow-slate-500  justify-center items-center '>

                        <div className='rounded-lg'>

                            <img className='h-60 border object-cover w-full rounded-t-lg' src={prop.image} alt="" />
                        </div>

                        <div className='bg-white rounded-b-lg p-5'>

                            <h1 className='text-gray-800 text-xl font-semibold pt-1 pl-1 hover:underline hover:text-gray-950'>{prop.name}</h1>
                            <h1 className='text-gray-900 text-sm font-semibold pt-1 pl-1 hover:underline hover:text-gray-950'>
                                {prop.address}
                            </h1>

                            <div className='grid grid-cols-3 p-1 gap-1'>

                                <div className='col-span-1 border text-center bg-gray-100 shadow-xl border-gray-200'>
                                    {prop.type}
                                </div>

                                <div className='col-span-1 border  bg-gray-100 text-center border-gray-200 shadow-xl'>
                                    Fully Furnished
                                </div>

                                <div className='col-span-1 border  bg-gray-100 text-center border-gray-200 shadow-xl'>
                                    Ready to move
                                </div>

                            </div>

                            <div className='flex justify-between w-full px-1 mt-2 items-center'>

                                <h1 className='text-lg text-gray-900 font-bold'>Price : {prop.price}</h1>

                                <Link href={"/productDetails/" + prop._id} className='flex items-center justify-center border bg-gray-600 text-white font-semibold w-[40%] h-10  rounded-2xl '>Contact Now</Link>

                            </div>

                        </div>

                    </div>

                }))

                }

            </div>
        }
    }

    return (
        <div>
            <div className='mt-1'>
                {cards()}
            </div>
        </div>
    )
}

export default topproperties