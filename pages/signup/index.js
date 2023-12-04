import Image from "next/image";
import cld from '../../public/calender.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";



export default function index() {
    const [password, setpassword] = useState()
    const [email, setemail] = useState()
    const [Name, setName] = useState()
    const [emailerror, setemailerror] = useState(null)
    const [passworderror, setpassworderror] = useState(null)



    const formSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user.email);
            })
            .catch((error) => {
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setemailerror('User already exist')

                }
                else if(error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    setpassworderror('must have 6 character')

                }
            });

    }
    return (
        <>
          
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        <Image
                            className="mx-auto h-14  w-auto"
                            src={cld}
                            alt="Your Company"
                        /> Signup  your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={(e) => formSubmit(e)} className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="Name"
                                    type="text"
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoComplete="email"
                                    required
                                    className="px-1  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0039a6] sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    autoComplete="email"
                                    required
                                    className={`px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ${emailerror?'ring-2 ring-red-500 bg-red-100':'ring-gray-300'} ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0039a6] sm:text-sm sm:leading-6`}
                                />
                            </div>
                            {
                            emailerror&&<p className="text-red-500 text-xs">User already exist</p>
                            }
                            
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                    className={`px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  ${passworderror?'ring-2 ring-red-500 bg-red-100':'ring-gray-300'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0039a6] sm:text-sm sm:leading-6`}
                                />
                            </div>
                            {passworderror&&<p className="text-red-500 text-xs">Must have 6 characters</p>}
                        </div>
                        <p className=" text-sm text-gray-500">
                            Have an account?{' '}
                            <Link href="/" className="font-semibold  text-[#0039a6] hover:text-indigo-500">
                                Signin
                            </Link>
                        </p>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#0039a6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0912a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0039a6]"
                            >
                                Signup
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}
