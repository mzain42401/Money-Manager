import React from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Spending = () => {
    return (
        <>

            <div className='spending   flex flex-col text-xl  justify-evenly items-center'>
                <div className='  w-full flex justify-between items-center '>
                    <div className='pl-10 text-gray-600 font-semibold'>
                        November 2023
                    </div>
                    <div className='pr-10 flex justify-evenly items-center'>
                        <div className='px-2 text-3xl cursor-pointer'><IoIosArrowDropleft /></div>
                        <div className='px-2 text-3xl cursor-pointer'><IoIosArrowDropright /></div>
                    </div>
                </div>


                <div className='w-full  flex flex-col justify-start pt-5 items-center h-screen overflow-y-scroll no-scrollbar'>
                    <div className='flex font-semibold justify-between w-[95%]'>
                        <div >Income</div>
                        <div className='text-green-700'>200</div>
                    </div>
                    <div className='flex justify-between font-semibold w-[95%]'>
                        <div>Expense</div>
                        <div className='text-red-600'>200</div>
                    </div>

                    <div className='flex text-gray-500 italic justify-between mt-3 w-[85%]'>
                        <div>Expense</div>
                        <div className=''>200</div>
                    </div>




                    <div className='mt-3 border-t pt-2 border-red-900 mb-5 flex justify-evenly w-[95%] font-semibold'>
                        <div>Total Balance</div>
                        <div className='text-red-600'>200</div>
                    </div>

                </div>
                <div className='w-full flex justify-evenly items-center'>
                    <div className='bg-[#0039a6] px-5 rounded py-[1px] text-white text-lg cursor-pointer'>INCOME</div>
                    <div className='bg-[#0039a6] px-5 rounded py-[1px] text-white text-lg cursor-pointer' >EXPENSE</div>

                </div>
            </div>
        </>
    )
}

export default Spending
