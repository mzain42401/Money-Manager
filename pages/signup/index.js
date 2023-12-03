import Image from "next/image";
import cld from '../../public/calender.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Link from "next/link";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```


*/


export default function index() {
    const [password, setpassword] = useState()
    const [email, setemail] = useState()
    const [Name, setName] = useState()

    const formSubmit = (e) => {
        e.preventDefault()
        console.log(email, password,Name);

    }
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}


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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0039a6] sm:text-sm sm:leading-6"
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0039a6] sm:text-sm sm:leading-6"
                                />
                            </div>
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0039a6] sm:text-sm sm:leading-6"
                                />
                            </div>
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
