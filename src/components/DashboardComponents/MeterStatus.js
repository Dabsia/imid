import React from 'react'

const MeterStatus = () => {
    return (
        <div className='bg-white md:w-[350px]  w-full p-5 mr-8 rounded-md' >
            <div className='flex items-center justify-between mb-2' >
                <h4 className='text-[#636363] font-bold' >Meter 1234</h4>
                <div className='bg-[green] text-white p-1 rounded-md' ><p className='text-[12px]' >Active</p></div>
            </div>
            <div className='flex items-center justify-between mb-2' >
                <h4 className='text-[#8d8c8c] font-medium text-[13px]' >Meter Number</h4>
                <p className='text-[#525252] font-medium text-[13px]' >1234</p>
            </div>
            <div className='flex items-center justify-between mb-2' >
                <h4 className='text-[#8d8c8c] font-medium text-[13px]' >Installation Date</h4>
                <p className='text-[#525252] font-medium text-[13px]' >12 August 2022</p>
            </div>
            <div className='flex items-center justify-between mb-2' >
                <h4 className='text-[#8d8c8c] font-medium text-[13px]' >Last Meter Check</h4>
                <p className='text-[#525252] font-medium text-[13px]' >13 August 2022</p>
            </div>

        </div>
    )
}

export default MeterStatus