'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Navbar = () => {

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = () => {
    axios.get(`http://localhost:5000/sites/getbyname/${searchTerm}`)
      .then((res) => {
        console.log(res.data);
        setSearchResults(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  const displaycard = () => {
    return (
      <div>
        <ul>
          {searchResults.map((item) => (
            <li key={item._id}>
              <Link href={"/productDetails/" + item._id} className='bg-gray-600 text-white font-semibold w-[40%] px-1 h-7 text-center rounded-xl '>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }


  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const reset = () => {
    setSearchTerm("");
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleClick = () => {
    reset();
  }

  return (


    <div className='pb-16'>
      <div className='mb-2 z-20 fixed w-full overflow-hidden '>

        <header className="flex flex-wrap  md:justify-start h-[70px] md:flex-nowrap z-50 w-full  bg-gradient-to-tr from-gray-500 to-gray-800 border rounded-xl border-gray-200  ">

          <nav className="relative max-w-[85rem] w-full mx-auto  flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">

            <Link className="font-bold text-2xl text-white " href='./'  >reSide</Link>

            {/* //onClick={router.push('/')} */}



            <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">

              <div>
                <a id="hs-header-base-dropdown" href='../properties' type="button" className="hs-dropdown-toggle w-full p-2 flex items-center   font-semibold text-sm text-white hover:bg-blue-800 rounded-lg ">
                  Our Properties
                </a>
              </div>

              <div>
                <a id="hs-header-base-dropdown" type="button" className="hs-dropdown-toggle w-full p-2 flex items-center font-semibold text-sm text-white hover:bg-blue-800 rounded-lg " href='../add-property'>
                  Add Your Property
                </a>
              </div>

              <div>
                <a id="hs-header-base-dropdown" type="button" className="hs-dropdown-toggle w-full p-2 flex items-center  font-semibold text-sm text-white hover:bg-blue-800 rounded-lg " href='../aboutUs'>
                  About Us
                </a>
              </div>

              <div>
                <a id="hs-header-base-dropdown" type="button" className="hs-dropdown-toggle w-full p-2 flex items-center  font-semibold text-sm text-white hover:bg-blue-800 rounded-lg " href='../contactUs'>
                  Contact Us
                </a>
              </div>



              {/* Search bar*/}
              <div className='flex  relative items-center h-10 w-60 overscroll-contain'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>

                <input
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Search properties........ "
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange} required
                />

                <h1 className='flex flex-col'>{displaycard()}</h1>
              </div>



              
{/* <form class="max-w-lg mx-auto">
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form> */}



              <div>
                <a id="hs-header-base-dropdown" type="button" href='../login' className="hs-dropdown-toggle w-full p-2 flex items-center px-8 font-bold text-white h-14 text-sm bg-gray-600 hover:bg-blue-700 rounded-lg ">
                  Login
                </a>
              </div>




            </div>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar