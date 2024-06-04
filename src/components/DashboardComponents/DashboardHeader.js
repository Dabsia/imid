import React from 'react'

const DashboardHeader = () => {
    return (
        <div className='mb-6'>
            <div>
                <div className='bg-[#7d7d7d] w-fit p-1 cursor-pointer rounded-md' >
                    <i className="ri-arrow-left-line text-white text-lg"></i>
                </div>
            </div>

            <div className='flex mt-6' >
                <div className='mr-6'>
                    <p className=' font-medium text-[#777] text-[12px] md:text-[15px] cursor-pointer' >General Details</p>
                </div>
                <div className='mr-6 relative cursor-pointer '>
                    <p className='text-[#428fc1] font-bold text-[12px] md:text-[15px]' >Meter Consumption</p>
                    <div className='underlineBox' ></div>
                </div>
                <div>
                    <p className='font-medium text-[#777] cursor-pointer text-[12px] md:text-[15px]' >Transaction</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader