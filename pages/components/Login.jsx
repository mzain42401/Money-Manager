import Image from "next/image";
import cld from '../../public/calender.png'
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import Link from "next/link";
import {auth} from '../../firebase/firebase';
import {   signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import Loader from '../components/Loader'
import { useRouter } from "next/router";


export default function Login({islogin}) {
  const [password, setpassword] = useState()
  const [email, setemail] = useState()
  const [error,setError]=useState(null)
  const [loding, setloding] = useState(false)
  const provider = new GoogleAuthProvider();

  const sinupWithGoogle=()=>{

    signInWithPopup(auth, provider)
  }

  const formSubmit = (e) => {
    e.preventDefault()
    // setloding(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      myroute.push('/app')
    })
    .catch((error) => {
    // setloding(false)
setError("Invalid email or password")
        console.log(error.message);
    });
  }
 
  return (
    <>
    

{
  loding?<Loader/>:<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <Image
      className="mx-auto h-14  w-auto"
      src={cld}
      alt="Your Company"
    />
    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign in to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={(e) => formSubmit(e)} className="space-y-6" action="#" method="POST">
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
            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0039a6] sm:text-sm sm:leading-6"
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
            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0039a6] sm:text-sm sm:leading-6"
          />
        </div>
        {
                                        error && <p className="pl-1 pt-2 text-red-500 text-xs">{error}</p>
                                    }
      </div>
      <p className=" text-sm text-gray-500">
        Don't  have an account?{' '}
        <span onClick={islogin} className="font-semibold cursor-pointer  text-[#0039a6] hover:text-[#0039a6]">
          Signup
        </span>
      </p>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#0039a6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0912a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0039a6]"
        >
          Sign in
        </button>
      </div>
    </form>

    <div onClick={sinupWithGoogle} className=" relative cursor-pointer flex w-full justify-center items-center rounded-md bg-[#0039a6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0912a9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0039a6] mt-3 600 text-center  ">
      <div className="absolute left-1 rounded-sm text-2xl flex justify-center items-center  py-1.5 bg-white h-8 w-8"> <FcGoogle /></div>
      Signin with Google
    </div>
  </div>
</div>
}
      
    </>
  )
}
