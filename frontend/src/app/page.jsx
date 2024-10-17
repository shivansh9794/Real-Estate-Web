import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'
import React from 'react'
import Properties from './TopProperties/page';
import Customerfeedback from '@/components/Customerfeedback';



const page = () => {




  return (
    <div className='bg-gray-100'>

      {/* <Navbar></Navbar> */}

      <div className='w-full '>

        <div className='grid grid-cols-9 bg-gray-100'>

          <div className='flex flex-col col-span-4 bg-gray-200 justify-center items-center h-screen'>
            <h1 className=' font-bold text-6xl text-white'>Find The Perfect</h1>
            <h1 className='font-bold text-black text-6xl'>Place to Live With Your Family</h1>
            <p className='items-start w-full font-semibold p-4 text-lg '>Your neighborhood, your future. Let's build it together.</p>

            <button className='border rounded-md h-12  font-bold p-2 mr-24 mt-8 bg-gray-300  text-gray-950'> Explore Property</button>
          </div>

          <div className='bg-contain col-span-5'>
            <img className=' h-[90%] object-cover w-full bg-cover' src="https://res.cloudinary.com/dbugkyyly/image/upload/v1726929454/oanhvefnbz2rbppkh0al.png" alt="error" />
          </div>

        </div>


        <div >

          <h1 className=' p-4 font-semibold text-3xl text-gray-900'>We've got some TOP properties</h1>

            <Properties></Properties>
          
        </div>


        <div className='p-1 font-semibold text-3xl text-gray-900'>
          <Customerfeedback></Customerfeedback>
        </div>

        <div className='p-1'>
        <Footer></Footer>
        </div>

      </div>
    </div>
  )
}

export default page;