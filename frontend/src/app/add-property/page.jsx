'use client'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
<Toaster position="bottom-center" />


const AddProperty = () => {

    // for image upload on clounary

    const [previewUrl, setPreviewUrl] = useState(' ');

    const uploadfile = (e) => {
        const file = e.target.files[0];

        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('upload_preset', 'myuploadpreset');
        formdata.append('cloud_name', 'dbugkyyly');

        axios.post('https://api.cloudinary.com/v1_1/dbugkyyly/image/upload', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((result) => {
                toast.success('File Uploaded Successfully');
                console.log(result.data);
                setPreviewUrl(result.data.url);
            }).catch((err) => {
                console.log(err);
                toast.error('File Upload Failed')
            });
    }

    let url=previewUrl;


    const addSitesForm = useFormik({
        initialValues: {
            name: '',
            area: '',
            contact: '',
            price: '',
            type: '',
            address: '',
            contact: '',
            image:  url
        },


        onSubmit: (values, { resetForm }) => {
            console.log(values)
            axios.post('http://localhost:5000/sites/add', values)
                .then((result) => {
                    toast.success("Property Added successfully");
                }).catch((err) => {
                    console.log(err);
                    toast.error(err?.response?.data?.message);
                });
            resetForm();
        },

    })


    
    

    


    return (
        
        <div className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/007/515/578/original/home-selling-business-concept-with-a-bag-of-money-and-a-house-4k-animation-real-estate-business-transaction-animation-buying-or-selling-house-4k-animation-concept-hands-with-bag-of-money-and-home-video.jpg')] bg-fixed  bg-cover flex w-full h-screen justify-center items-center" >
            <div className='border rounded-2xl border-blue-900 bg-gray-200 bg-opacity-80  flex flex-col p-4  w-2/3 justify-center items-center'>

                <h1 className='font-bold text-4xl pb-10'>Add Property Details</h1>

                <form onSubmit={addSitesForm.handleSubmit} className="flex flex-col w-3/4 h-5/6">

                    <div className='grid grid-cols-2 grid-flow-row '>

                        <div className='col-span-1'>
                            
                            <label className='font-bold text-xl mr-2' htmlFor="name">Name : </label>
                            <input className="border border-gray-700 rounded-xl p-2 h-10"
                                type="text"
                                placeholder='Name of property'
                                id="name"
                                onChange={addSitesForm.handleChange}
                                value={addSitesForm.values.name}

                                
                            />
                        </div>

                        
                        
                        <div className='col-span-1'>
                            <label className='font-bold text-xl mr-2' htmlFor="area">Area :</label>
                            <input className="border border-gray-700 rounded-xl p-2 h-10"
                                type="number"
                                id="area"
                                placeholder='Area in Square Foot'
                                onChange={addSitesForm.handleChange}
                                value={addSitesForm.values.area}
                            />
                        </div>
                    </div>



                    <div className='flex m-3 w-full'>
                        <label className='font-bold text-xl mr-4' htmlFor="type">Type: </label>
                        <input placeholder='type of your property' className="border w-[80%] border-gray-700 rounded-xl p-2 h-10"
                            type="text"
                            id="type"
                            onChange={addSitesForm.handleChange}
                            value={addSitesForm.values.type}
                        />
                    </div>

                    <div className='flex m-3 w-full'>
                        <label className='font-bold text-xl m-2' htmlFor="address">Address :</label>
                        <input placeholder='Address of your property' className="border w-[75%] border-gray-700 rounded-xl p-2 h-10"
                            type="text"
                            id="address"
                            onChange={addSitesForm.handleChange}
                            value={addSitesForm.values.address}
                        />
                    </div>

                    <div className='flex m-3 w-full'>
                        <label className='font-bold text-xl m-2' htmlFor="contact">Contact Number:</label>
                        <input placeholder='your contact number ' className="border w-[63%] border-gray-700 rounded-xl p-2 h-10" type="number" id="contact"
                            onChange={addSitesForm.handleChange}
                            value={addSitesForm.values.contact}
                        />
                    </div>

                    <div className='flex m-3 w-full'>
                        <label className='font-bold text-xl m-2' htmlFor="price">Price :</label>
                        <input placeholder='Price of your property' className="border w-[80%] border-gray-700 rounded-xl p-2 h-10"
                            type="number"
                            id="price"
                            onChange={addSitesForm.handleChange}
                            value={addSitesForm.values.price}
                        />
                    </div>

                    <div className='grid grid-cols-7 w-full'>

                        <h1 className='font-bold text-xl col-span-2 pt-4 items-center justify-center'> Select Images: </h1>

                        <div className='boder border-gray-800 bg-white flex rounded-xl col-span-5'>

                            <div className='flex m-3 w-full col-span-1'>

                                <label  
                                    className='text-xl text-center border bg-gray-200 rounded-xl w-full'     
                                    htmlFor="mainimage"
                                    onChange={addSitesForm.handleChange}
                                >
                                    Upload
                                </label>

                                <input 
                                    type="file"      
                                    id="mainimage" 
                                    hidden
                                    onChange={uploadfile }
                                    
                                    
                                />

                            </div>
{/* 
                            <div className='flex m-3 w-full col-span-1'>
                                <label className='text-xl border  bg-gray-200 rounded-xl'
                                    onChange={addSitesForm.handleChange}

                                    htmlFor="sideimage"
                                    type="file" >Side</label>
                                <input type="file" id="sideimage" hidden
                                    onChange={uploadfile}
                                    value={addSitesForm.values.sideimage.previewUrl}
                                />
                            </div>

                            <div className='flex m-3 w-full col-span-1'>
                                <label className='text-xl  border  bg-gray-200 rounded-xl ' htmlFor="kitchenimage"
                                    onChange={addSitesForm.handleChange}

                                >kitchen</label>
                                <input type="file" id="kitchenimage" hidden
                                    onChange={uploadfile}
                                    value={addSitesForm.values.kitchenimage.previewUrl} />
                            </div>

                            <div className='flex m-3 w-full col-span-1'>
                                <label className='text-xl border  bg-gray-200 rounded-xl' htmlFor="bedroomimage"
                                    onChange={addSitesForm.handleChange}
                                >BedRoom</label>
                                <input type="file" id="bedroomimage" hidden
                                    onChange={uploadfile}
                                    value={addSitesForm.values.bedroomimage.previewUrl}
                                />
                            </div>

                            <div className='flex m-3 w-full col-span-1'>
                                <label className='text-xl border  bg-gray-200 rounded-xl ' htmlFor="washroomimage" onChange={addSitesForm.handleChange}>WashRoom
                                </label>
                                <input type="file" id="washroomimage" hidden
                                    onChange={uploadfile}
                                    value={addSitesForm.values.washroomimage.previewUrl}
                                />
                            </div> */}
                            
                        </div>

                    </div>




                    <button className='w-full bg-blue-600 rounded-2xl h-10 mt-10' type='submit'>SUBMIT</button>

                </form>

                {/* <h1>Url:{addSitesForm.values.image}</h1> */}



            </div>


        </div>
    )
}

export default AddProperty;