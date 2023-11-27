import Image from 'next/image'
import React, { useState } from 'react'
import cld from '../public/calender.png'
import Spending from './components/Spending'
import Transaction from './components/Transaction'
const index = () => {

  const [toggel,setToggle]=useState(false)
  return (
    <>
      <section className=' w-full h-screen md:w-[60%] bg-gray-100 m-auto sticky '>

        {/* top============== */}

        <div className='sticky w-full top-0 text-white bg-[#0039a6] h-18 pb-3 flex justify-between items-center '>

          <div className='flex justify-center items-center pt-2'>
            <div><Image className='w-16 h-12' src={cld} /></div>
            <h1 className='md:text-2xl text-lg '>My Money Manager</h1>
          </div>

          <div className='px-10'>
            dark
          </div>
        </div>
        <div className='w-full sticky bg-[#0039a6] text-white flex justify-evenly items-center h-10 pt-3'>
          <div onClick={()=>setToggle(false)} className={`hover:border-b-4 cursor-pointer hover:border-[#fff] border-b-4 border-[#0039a6]  ${toggel?null:`border-b-4 border-[#fff]`}`}>
            SPENDING
          </div>
          <div onClick={()=>setToggle(true)}  className={`hover:border-b-4 cursor-pointer hover:border-[#fff] border-b-4 border-[#0039a6] ${toggel?`border-b-4 border-[#fff]`:null}`}>
            TRANSACTION
          </div>

        </div>

{
  toggel?
  
<Transaction/>
  :
<Spending/>
}


        

      </section>
    </>
  )
}

export default index
