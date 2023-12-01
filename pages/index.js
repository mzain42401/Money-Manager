import Image from 'next/image'
import React, { useState } from 'react'
import cld from '../public/calender.png'
import Spending from './components/Spending'
import Transaction from './components/Transaction'
import Login from './components/Login'
import {useAuth} from '../firebase/authcontext'
const index = () => {
  const aa=useAuth()
  
  const [toggel, setToggle] = useState(false)
  return (
    <>
    <Login/>
    </>
  )
}

export default index
