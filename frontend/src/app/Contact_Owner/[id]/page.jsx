'use client'
import axios from 'axios';
import React from 'react'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import Footer from '@/components/Footer';
import Properties from '@/app/TopProperties/page';

const page = () => {

    const { id } = useParams();
    const [ProdDeta, setProdDeta] = useState([null]);

    const fetchprodData = async () => {
        const res = await axios.get('http://localhost:5000/sites/getbyid/' + id)
        console.log(res.data);
        setProdDeta(res.data);
    }

    useEffect(() => {
        fetchprodData();
    }, []);



    return (
        <div>
            <section className="bg-white h-auto dark:bg-gray-200">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
                            The Description of the Property
                        </h2>
                        <p className="mb-4">

                        </p>
                        <p className="mt-4 text-black">
                            This is a big {ProdDeta.type} in a Area of {ProdDeta.address} and the price is {ProdDeta.price} which is a great deal. we help you in a such a way so you can enjoy your living hapily with our little help. it is also located in a {ProdDeta.address} and this is a best place to live . you will find all the markets and utility stores near you easilly.
                        </p>

                        <div >

                            <h2 className="mt-8 text-4xl tracking-tight font-extrabold text-gray-900 ">
                                The Contact Number of the Property Owner :
                            </h2>

                            <h1 className="mt-7 border border-box bg-gray-400 h-10  w-40 text-center rounded-xl text-2xl font-bold text-black">
                                {ProdDeta.contact}
                            </h1>

                        </div>



                    </div>
                    <div className="mt-8">
                        <img
                            className="w-full rounded-lg"
                            src={ProdDeta.image}
                        />
                    </div>

                </div>
                <h1 className="mt-8 ml-6 text-4xl font-bold">
                    We have some simmilar properties also :
                </h1>
                <Properties></Properties>
            </section>
            <Footer></Footer>

        </div>
    )
}

export default page