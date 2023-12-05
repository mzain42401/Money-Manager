import Image from 'next/image'
import React, { useState } from 'react'
import cld from '../public/calender.png'
import Spending from './components/Spending'
import Transaction from './components/Transaction'
import Login from './components/Login'
import {auth} from '../firebase/firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import Loader from './components/Loader'

// import {useAuth} from '../firebase/authcontext'
const index = () => {
  
 
  
  const [toggel, setToggle] = useState(false)
  return (
    <>
    <Login/>
    {/* <div className='h-screen w-full flex justify-center items-center'>

   <Loader/>
    </div> */}
    </>
  )
}

export default index
