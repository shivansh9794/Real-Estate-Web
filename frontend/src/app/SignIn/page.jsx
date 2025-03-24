'use client'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'Yup'
import axios from 'axios'
import toast from 'react-hot-toast'


const SignupSchema = Yup.object().shape(
    {
      email: Yup.string()
        // .email('Please enter a valid email address')
        .required('Email is required')
        .matches(/[@]/, "must conatain @ Symbol")
        .matches(/[.com]/, "must conatain .com "),
  
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .required('Password is requires')
    }
  )

const addUser = () => {

    const [passwordHidden, setpasswordHidden] = useState(true);


    const addUserForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            city: ''

        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            axios.post('http://localhost:5000/user/add', values)
              .then((result) => {
                toast.success("user created successfully");
              }).catch((err) => {
                console.log(err);
                toast.error(err?.response?.data?.message);
              });
            resetForm();
          },
          validationSchema: SignupSchema,
    })


    return (

        <div className='flex flex-col h-screen w-full items-center justify-center bg-gray-200'>
            <div className='flex flex-col bg-gray-300 w-1/3 border shadow-lg rounded-xl items-center justify-center '>

                <h1 className='font-bold text-gray-800 text-3xl mb-8 mt-3'>Create New Account</h1>

                <form onSubmit={addUserForm.handleSubmit} className='flex flex-col mt-2 gap-1 w-9/12 rounded-2xl bg-gray-300 p-1 '>


                    <label htmlFor="" className='font-semibold text-lg text-gray-800'>Name :</label>
                    <input
                        className='border border-gray-900 rounded-lg p-1'
                        type="text"
                        name="name"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.name}

                    />

                    <label htmlFor="" className='font-semibold text-lg text-gray-800'>Email :</label>
                    <input
                        className='border border-gray-900 rounded-lg p-1'
                        type="email"
                        name="email"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.email}
                    />

                    <label htmlFor="" className='font-semibold text-lg text-gray-800'>Password :</label>
                    <input
                        className='border border-gray-900 rounded-lg p-1'
                        type={passwordHidden ? 'password' : 'text'} name="password"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.password}
                    />
                    <div className='flex w-auto justify-end '>

                        <button className='text-xs border bg-gray-400 rounded-xl px-1 font-bold  mr-4 mt-1' type='button' 
                        onClick={() => setpasswordHidden(!passwordHidden)}> {passwordHidden ? 'Show password' : 'Hide password'}</button>

                        <input type="button" className='border text-xs font-bold mt-1' onClick={() => setpasswordHidden(!passwordHidden)} />

                    </div>

                    <label htmlFor="" className='font-semibold text-lg text-gray-800'>City :</label>
                    <input
                        className='border border-gray-900 rounded-lg p-1'
                        type="text"
                        name="city"
                        onChange={addUserForm.handleChange}
                        value={addUserForm.values.city}
                    />

                    <div className='flex w-full h-full justify-between items-end'>
                        <a href="../login" className='text-blue-700 font-bold px-8 py-2 font-sm'>Login Now</a>
                        <button type='submit' className='bg-gray-950 text-white  px-8 py-2 rounded-2xl '>Add User</button>
                    </div>

                    <div className='flex justify-end items-end mt-2'>

                    </div>

                </form>




            </div>
        </div>


    )
}

export default addUser