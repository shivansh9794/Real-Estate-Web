'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Properties from '@/app/TopProperties/page';
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer';
import Link from 'next/link';


const ProdDetails = () => {

  const { id } = useParams();

  const [ProdDeta, setProdDeta] = useState([]);


  const fetchprodData = async () => {
    const res = await axios.get('http://localhost:5000/sites/getbyid/' + id)
    console.log(res.data);
    setProdDeta(res.data);
  }

  useEffect(() => {
    fetchprodData();
  }, []);


  const addtocart = () => {
    axios.post('http://localhost:5000/user/add', [id])
      .then((result) => {
        toast.success("Added to cart successfully");
      }).catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      });
  }


  return (
    <div>

      {
        ProdDeta !== null ? (


          <section >
            <div className="container mx-auto ">



              <div className="mt-0 grid grid-cols-5 gap-12 lg:mt-10 lg:grid-cols-5 ">



                {/* Property Images */}
                <div className="lg:col-span-3 lg:row-end-1">

                  <div className="lg:flex lg:items-start">
                    <div className="lg:order-2 lg:ml-12">
                      <div className="w-xl h-[500px] overflow-hidden rounded-lg">
                        <img
                          className="h-full w-full max-w-full object-cover"
                          src={ProdDeta.image}
                          alt=""
                        />
                      </div>
                    </div>

                    {/* Side Logo of Image */}
                    <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                      <div className="flex flex-row items-start lg:flex-col">
                        <button
                          type="button"
                          className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={ProdDeta.image}
                            alt="hello"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* pproperty Name */}
                <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                  <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                    {ProdDeta.name}
                  </h1>

                  {/* stars */}
                  <div className="mt-3 flex items-center">
                    <div className="flex items-center">
                      <svg
                        className="block h-4 w-4 align-middle text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                      <svg
                        className="block h-4 w-4 align-middle text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                      <svg
                        className="block h-4 w-4 align-middle text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                      <svg
                        className="block h-4 w-4 align-middle text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                      <svg
                        className="block h-4 w-4 align-middle text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          className=""
                        />
                      </svg>
                    </div>
                  </div>

                  {/* property type */}
                  <h2 className="mt-5 text-base text-gray-900">Property Type</h2>
                  <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                    <label className="">
                      <input
                        type="radio"
                        name="type"
                        defaultValue="Powder"
                        className="peer sr-only"
                        defaultChecked=""
                      />
                      <p className="bg-gray-500 text-white rounded-lg border px-12 py-1 font-bold">
                        {ProdDeta.type}
                      </p>
                    </label>
                  </div>


                  {/* Furnishing status */}
                  <h2 className="mt-4 text-base text-gray-900">Furnished Status Type</h2>
                  <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                    <label className="">
                      <p className="bg-gray-500 text-white rounded-lg border px-12 py-1 font-bold">
                        Semi - Furnished
                      </p>
                    </label>
                  </div>

                  {/* property Price */}
                  <div className="mt-2 space-y-2 border-t border-b py-4 ">

                    <div className="flex items-end">
                      <h1 className="text-2xl text-gray-700 font-bold">₹{ProdDeta.price}</h1>
                    </div>

                  </div>

                  {/* Address */}
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-left text-sm font-medium text-gray-600">
                      <svg
                        className="mr-2 block h-5 w-5 align-middle text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          className=""
                        />
                      </svg>
                      {ProdDeta.address}
                    </li>

                    <li className="flex items-center text-left text-sm font-medium text-gray-600">
                      <svg
                        className="mr-2 block h-5 w-5 align-middle text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          className=""
                        />
                      </svg>
                      Value For Money
                    </li>

                    <li className="flex items-center text-left text-sm font-medium text-gray-600">
                      <svg
                        className="mr-2 block h-4 w-4 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="currentColor"
                      >

                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width={2}
                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" />
                      </svg>



                      Area :  {ProdDeta.area} Sq.Ft.
                    </li>


                  </ul>

                  {/* Contact Ownwer */}
                  <Link href={"/Contact_Owner/" + ProdDeta._id}
                    type="button"
                    className="mt-10 rounded-md border-2 border-transparent bg-gray-900 bg-none px-32 py-5 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Contact Owner
                  </Link>

                  {/* <button onClick={addtocart}>Add to Cart</button> */}

                </div>



                <div className="lg:col-span-3">
                  <div className="border-b border-gray-300">
                    <nav className="flex gap-4">
                      <a
                        href="#"
                        title=""
                        className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                      >
                        {" "}
                        Description{" "}
                      </a>
                    </nav>

                  </div>


                  <div className="mt-8 flow-root sm:mt-12">
                    <h1 className="text-3xl font-bold">Best {ProdDeta.type} in Area </h1>
                    <p className="mt-4">
                      The Area of a this {ProdDeta.type} is {ProdDeta.area} Sq.Ft. and the price is {ProdDeta.price} which is a great deal. we help you in a such a way so you can enjoy your living hapily with our little help. it is also located in a {ProdDeta.address} and this is a best place to live . you will find all the markets and utility stores near you easilly.
                    </p>
                    <h1 className="mt-8 text-3xl font-bold">
                      A great {ProdDeta.type} of {ProdDeta.address}
                    </h1>
                    
                    <p className="mt-4">
                      This is a big {ProdDeta.type} in a Area of {ProdDeta.address} and the price is {ProdDeta.price} which is a great deal. we help you in a such a way so you can enjoy your living hapily with our little help. it is also located in a {ProdDeta.address} and this is a best place to live . you will find all the markets and utility stores near you easilly.
                    </p>

                    <h1 className="mt-8 text-3xl font-bold">
                      We have some simmilar properties also :
                    </h1>

                  </div>
                </div>
              </div>
              <div>
                <Properties></Properties>
              </div>
            </div>
          </section>
        ) : (
          <h1>Loading ... </h1>
        )
      }

      <Footer></Footer>
    </div>
  )
}

export default ProdDetails;

