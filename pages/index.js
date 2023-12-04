import Image from 'next/image'
import React, { useState } from 'react'
import cld from '../public/calender.png'
import Spending from './components/Spending'
import Transaction from './components/Transaction'
import Login from './components/Login'
import {auth} from '../firebase/firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";

// import {useAuth} from '../firebase/authcontext'
const index = () => {
  
 
  
  const [toggel, setToggle] = useState(false)
  return (
    <>
    <Login/>
    </>
  )
}

export default index
