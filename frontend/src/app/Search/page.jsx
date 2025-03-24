"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const SearchBar = () => {

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
                        <Link href={"/productDetails/" + item._id} className='border bg-gray-800 text-white font-semibold w-[40%] h-7 text-center rounded-2xl '>{item.name}</Link>
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

        <div>

            <div>
                <input
                    className='mt-20 border border-gray-900 '
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <br />
                <button className='border bg-blue-700 rounded-lg px-4' onClick={handleClick} >Clear</button>
            </div>

            <div>
                <h1>Search results.....</h1>
                {displaycard()}
            </div>

        </div>

    )

}

export default SearchBar;