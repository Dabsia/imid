import React from 'react'

const MeterReading = () => {
    return (
        <div className='bg-white md:w-[350px] mt-5 md:mt-0 w-full p-5  rounded-md' >
            <h4 className='text-[#7e7e7e] font-bold' >Meter Reading</h4>
            <div className='flex justify-between mt-5  meterReadingCTA' >
                <div className='meterReadingContainer' >
                    <input placeholder='0' type='number' className='bg-[#eee] font-bold meterReadingInput mr-2 text-[#428fc1] placeholder-[#3982aa] rounded-md p-2 w-[4.3rem] text-center outline-none' />
                    <input placeholder='0' type='number' className='bg-[#fff] font-bold meterReadingInput mr-2 border-blue-300 border text-[#428fc1] placeholder-[#3982aa] rounded-md p-2 w-[4.2rem] text-center outline-none' />
                    <input placeholder='0' type='number' className='bg-[#eee] font-bold meterReadingInput text-[#428fc1] placeholder-[#3982aa] rounded-md p-2 w-[2.5rem] text-center outline-none' />
                </div>
                <button className='bg-blue-300 rounded-md px-2 text-[14px] text-white meterReadingBtn font-bold' >Send Data</button>

            </div>
        </div>
    )
}

export default MeterReading