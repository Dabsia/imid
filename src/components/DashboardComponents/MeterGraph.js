import React from 'react'
import Graph from './Graph'

const MeterGraph = () => {
    return (
        <div className='w-[55%] bg-white meterGraph p-8 rounded-md' >
            <div className='flex meterGraphHeader justify-between items-center' >
                <div className='border-l-4 border-[#608aa7] pl-2 mb-2 md:mb-0' >
                    <h3 className='font-bold text-[#428fc1] text-[14px]' >Total Breakdown of the Meter Usage</h3>
                    <p className='text-xs' >Your customer performance overview</p>
                </div>
                <div className='flex' >
                    <div className='border w-fit p-1 flex items-center mr-4 rounded-md border-[#608aa7]' >
                        <i className="ri-flashlight-fill mr-3"></i>
                        <span>Electricity</span>
                    </div>
                    <select className='rounded-md border-[#608aa7] border w-[100px] p-1 outline-none' >
                        <option>Week 1</option>
                        <option>Week 2</option>
                        <option>Week 3</option>
                        <option>Week 4</option>
                    </select>
                </div>
            </div>
            <Graph />
        </div>
    )
}

export default MeterGraph