import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Mainpart from './components/Main'
import Login from './components/Login'
import { auth } from '../firebase/firebase';
import Loader from './components/Loader'




const index = () => {
  const [user, setUser] = useState(true)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(false)
        setloading(false)
      }
      else {
        setUser(true)
        setloading(false)
      }
    })

  }, [])

  return (
    <>
      {
        loading ? <Loader /> : <div>{
          user ?<Login />: <Mainpart /> 
            }</div>
      }


    </>
  )
}

export default index
