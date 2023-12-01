import React, { useState } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright, IoMdCloseCircleOutline } from "react-icons/io";

const Spending = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const mon = new Date().getMonth()
    let [mymonth, setMymonth] = useState(mon)
    const year = new Date().getFullYear()
    let [myyear, setMyyear] = useState(year)
    let [category, setcategory] = useState()
    let [price, setprice] = useState()
    let [expenseprice, setexpenseprice] = useState()
    let [expensecategory, setexpensecategory] = useState()
    
    let [toggle, setToggle] = useState(false)
    let [expensetoggle, setexpensetoggle] = useState(false)


    const addExpense = (e) => {
        e.preventDefault();
        setexpensetoggle(!expensetoggle)

        setexpensecategory('')
        setexpenseprice()
    }
    const addIncome = (e) => {
        e.preventDefault();
        setToggle(!toggle)
        setprice()
        setcategory('')

    }
    const monthBack = () => {
        if (mymonth == 0) {
            setMyyear(myyear - 1)
        }
        setMymonth(mymonth == 0 ? mymonth + 11 : mymonth - 1)
    }
    const monthForward = () => {
        if (mymonth == 11) {
            setMyyear(myyear + 1)
        }
        setMymonth(mymonth == 11 ? mymonth - 11 : mymonth + 1)
    }

    return (
        <>

            {
                toggle ? <>
                    <form onSubmit={(e) => addIncome(e)} className='flex  justify-center items-center absolute h-[70%] w-[100%]'>

                        <div className='bg-white rounded h-[75%] w-[75%] md:h-[60%] md:w-[60%] flex flex-col justify-center items-center'>
                            <div class="w-72 flex justify-between h-10 font-semibold">
                                <div>Add Income</div>
                                <div onClick={() => setToggle(!toggle)} className='text-3xl cursor-pointer text-gray-400 hover:text-gray-950'><IoMdCloseCircleOutline /> </div>

                            </div>
                            <div class="w-72">
                                <div class="relative w-full min-w-[200px] h-10">
                                    <input
                                        value={category}
                                        onChange={(e) => setcategory(e.target.value)}
                                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder="Category " />
                                </div>
                            </div>
                            <div class="w-72 mt-5">
                                <div class="relative w-full min-w-[200px] h-10">
                                    <input
                                        value={price}
                                        onChange={(e) => setprice(e.target.value)}
                                        type='number'
                                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder="Price" />
                                </div>

                            </div>
                            <div class="w-72  mt-5 h-10  ">
                                <button type='submit' className='bg-[#0039a6] px-3 py-[6px] rounded text-white'>

                                    Add Income
                                </button>
                            </div>
                        </div>

                    </form>

                </> :
                    null
            }
            {
                expensetoggle ? <>
                    <form onSubmit={(e) => addExpense(e)} className='flex  justify-center items-center absolute h-[70%] w-[100%]'>

                        <div className='bg-white rounded h-[75%] w-[75%] md:h-[60%] md:w-[60%] flex flex-col justify-center items-center'>
                            <div class="w-72 flex justify-between h-10 font-semibold">
                                <div>Add Expense</div>
                                <div onClick={() => setexpensetoggle(!expensetoggle)} className='text-3xl cursor-pointer text-gray-400 hover:text-gray-950'><IoMdCloseCircleOutline /> </div>

                            </div>
                            <div class="w-72">
                                <div class="relative w-full min-w-[200px] h-10">
                                    <input
                                        value={expensecategory}
                                        onChange={(e) => setexpensecategory(e.target.value)}
                                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder="Category " />
                                </div>
                            </div>
                            <div class="w-72 mt-5">
                                <div class="relative w-full min-w-[200px] h-10">
                                    <input
                                        value={expenseprice}
                                        onChange={(e) => setexpenseprice(e.target.value)}
                                        type='number'
                                        class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder="Price" />
                                </div>

                            </div>
                            <div class="w-72  mt-5 h-10  ">
                                <button type='submit' className='bg-[#0039a6] px-3 py-[6px] rounded text-white'>

                                    Add Expense
                                </button>
                            </div>
                        </div>

                    </form>

                </> :
                    null
            }
            <div className='spending   flex flex-col text-xl  justify-evenly items-center'>
                <div className='  w-full flex justify-between items-center '>
                    <div className='pl-10  italic  text-gray-600 font-semibold'>
                        {months[mymonth] + " " + myyear}
                    </div>
                    <div className='pr-10 flex justify-evenly items-center'>
                        <div className='px-2 text-3xl cursor-pointer' onClick={monthBack}><IoIosArrowDropleft /></div>
                        <div className='px-2 text-3xl cursor-pointer' onClick={monthForward}><IoIosArrowDropright /></div>
                    </div>
                </div>


                <div className='w-full  flex flex-col justify-start pt-5 items-center h-screen overflow-y-scroll no-scrollbar'>
                    <div className='flex font-semibold justify-between w-[95%]'>
                        <div >Income</div>
                        <div className='text-green-700'>Rs.200/-</div>
                    </div>
                    <div className='flex justify-between font-semibold w-[95%]'>
                        <div>Expense</div>
                        <div className='text-red-600'>Rs.200/-</div>
                    </div>

                    {/* middle============= */}

                    <div className='flex  italic justify-between mt-3 w-[85%]'>
                        <div>Expense</div>
                        <div className=''>Rs.200/-</div>
                    </div>




                    {/* ============================ */}
                    <div className='mt-3 border-t pt-2 border-[#0039a6] mb-5 flex justify-between w-[95%] font-semibold'>
                        <div>Total Balance</div>
                        <div className='text-red-600'>Rs.200/-</div>
                    </div>

                </div>

                <div className='w-full flex justify-evenly items-center'>
                    <div className='bg-[#0039a6] px-5 rounded py-[1px] text-white text-lg cursor-pointer'
                        onClick={() => setToggle(!toggle)}>INCOME</div>
                    <div onClick={() => setexpensetoggle(!expensetoggle)} className='bg-[#0039a6] px-5 rounded py-[1px] text-white text-lg cursor-pointer' >EXPENSE</div>

                </div>
            </div>
        </>
    )
}

export default Spending
