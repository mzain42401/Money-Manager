import React from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Transaction = () => {
  return (
    <>

      <div className='spending    text-xl '>
        <div className='  w-full sticky flex justify-between items-center '>
          <div className='pl-10  italic  text-gray-600 font-semibold'>
            November 2023
          </div>
          <div className='pr-10 flex justify-evenly items-center'>
            <div className='px-2 text-3xl cursor-pointer'><IoIosArrowDropleft /></div>
            <div className='px-2 text-3xl cursor-pointer'><IoIosArrowDropright /></div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Transaction
