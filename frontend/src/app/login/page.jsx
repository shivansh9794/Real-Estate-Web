
'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'Yup'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';




const LoginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Please enter a valid email address')
            .required('Email is required'),

        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[a-z]/, 'Password must contain at least one uppercase letter')
            .matches(/\d/, 'Password must contain at least one number')
            .required('Password is required')

    }
)


const Login = () => {

    const [passwordHidden, setpasswordHidden] = useState(true);

    const router=useRouter();

    // step 1: formik initialization 

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''

        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            
            axios.post('http://localhost:5000/user/authenticate',values)
            .then((result) => {
                toast.success('Login Success');
                console.log(result.data);
                localStorage.setItem('token',result.data.token);
                router.push('/manageuser')

            }).catch((err) => {
                console.log(err);
                toast.error("Login Failed");
                
            });

            // resetForm()


        },
        validationSchema: LoginSchema

    })

    


    return (
        <div className='flex justify-center items-center h-screen '>
            <div className=" border-2 w-1/3 bg-gray-300 shadow-lg rounded-lg p-8 ">
                <h3 className="text-center font-bold text-2xl my-5"> LOGIN FORM </h3>

                {/* Data Handling Then Submit */}
                <form onSubmit={loginForm.handleSubmit}>
                    <label htmlFor=""> Email address</label>
                    {/* step-3 */}
                    <input
                        className="w-full p-1 border-2 border-gray-300 rounded-md mb-0"
                        type="email"
                        placeholder="email"
                        id='email'
                        onChange={loginForm.handleChange}
                        value={loginForm.values.email}
                    />

                    {loginForm.errors.email && loginForm.touched.email ? (
                        <div className='text-red-500 text-sm'>
                            {
                                loginForm.errors.email
                            }
                        </div>
                    ) : null}

                    <label htmlFor=""> Password</label>


                    <input
                        className="w-full p-1 border-2 border-gray-300 rounded-md mb-0"
                        type={passwordHidden ? 'password' : 'text'}
                        placeholder="password"
                        id='password'
                        onChange={loginForm.handleChange}
                        value={loginForm.values.password}
                    />



                    {loginForm.errors.password && loginForm.touched.password ? (
                        <div className='text-red-500 text-sm'>
                            {
                                loginForm.errors.password
                            }
                        </div>
                    ) : null
                    }
                    <div className='flex w-auto justify-end'>        

                        <button className='text-xs mr-4 mt-1' type='button' onClick={() => setpasswordHidden(!passwordHidden)}> {passwordHidden ? 'hidde password' : 'show password'}</button>

                        <input type="checkbox"  className='border text-xs mt-1'  onClick={() => setpasswordHidden(!passwordHidden)} />

                    </div>


                    <button  type="submit" className="bg-blue-500 py-2 px-4 text-white rounded-md block w-full mt-5">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login