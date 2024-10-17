'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const router = useRouter();

  return (


    <div className='pb-16'>
      <div className='mb-2 z-20 fixed w-full overflow-hidden '>

        <header className="flex flex-wrap  md:justify-start h-[70px] md:flex-nowrap z-50 w-full  bg-gradient-to-tr from-gray-500 to-gray-800 border rounded-xl border-gray-200  ">

          <nav className="relative max-w-[85rem] w-full mx-auto  flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">

            <a className="font-bold text-2xl text-white " href='./' >reSide</a>

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

              <div className='flex  relative items-center h-10 w-60'>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search properties...." required />

              <button
                type="submit"
                className=" text-white absolute end-2.5 bottom-2.5 bg-gray-600 hover:bg-blue-600 font-medium  border rounded-full text-sm  px-2 "

              >Search
              </button>
            </div>

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