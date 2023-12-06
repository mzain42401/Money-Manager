import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Mainpart from './components/Main'
import Login from './components/Login'
import { auth } from '../firebase/firebase';
import Loader from './components/Loader'



const index = () => {
  const [user, setUser] = useState(false)
  const [loading, setloading] = useState(true)
  const [userData, setUserData] = useState()

  

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(true)
        setUserData(user.email)
        setloading(false)
      }
      else {
        setUser(false)
        setloading(false)
      }
    })
  }, [])
console.log(userData);
  return (

    <>
      {
        loading ? <Loader /> :
          user ? <Mainpart UserData={userData} /> : <Login />
      }
    </>
  )
}

export default index
