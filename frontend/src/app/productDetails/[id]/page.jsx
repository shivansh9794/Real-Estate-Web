'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const ProdDetails = () => {

  const { id } = useParams();

  const [ProdDeta, setProdDeta] = useState(null);


  const fetchprodData = async() => {
    const res = await axios.get('http://localhost:5000/sites/getbyid/' + id)
    console.log(res.data);
    setProdDeta(res.data);
  }

  useEffect(() => {
    fetchprodData(); 
  }, []);






  return (
    <div className=''>
      {
        ProdDeta !== null ? (
          <div className='max-w-lg mx-auto rounded-lg mt-10 p-6 border shadow-lg shadow-gray-800'>
            <h1>{ProdDeta.name}</h1>

          </div>
        ) : (
          <h1>Loading ... </h1>
        )
      }
    </div>
  )
}

export default ProdDetails;