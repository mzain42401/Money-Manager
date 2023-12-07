import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import { auth } from '../firebase/firebase';
import Loader from './components/Loader'
import Signup from '../pages/components/Signup'
import { useRouter } from 'next/router';


const index = () => {
  const myroute = useRouter()
 
  const [login,setLogin] = useState(true)
  const [user,setuser] = useState(false)


const islogin=()=>{
  setLogin(!login)
}
  

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        myroute.push('/app')
      }
      else{
        setuser(true)
      }
      
    })
  }, [])
  return (

    <>
    {
      user?
        login?<Login islogin={islogin}/>:<Signup islogin={islogin}/> 
      :<Loader/>
    }
      
      
      
    </>
  )
}

export default index
