import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MeterUsage = () => {
    return (
        <div className='w-[40%] bg-white meterUsage p-8 rounded-md' >
            <div className='flex justify-between items-center mb-8' >
                <h4 className='text-[#7e7e7e] font-bold' >Meter Usage</h4>
                <select className='rounded-md border-[#608aa7] border w-[100px] p-1 outline-none' >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
            </div>
            <div className='w-[40%] h-[40%] mx-auto' >
                <CircularProgressbar
                    value={0}
                    text={'0%'}
                    // pathColor: {'rgba(168, 85, 247, 1)'}
                    styles={buildStyles({
                        //     // Rotation of path and trail, in number of turns (0-1)
                        //     // rotation: 0.25,
                        //     pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                        pathColor: `blue`,
                        textColor: 'blue',
                        //     trailColor: '#d6d6d6',
                        textSize: '20px'
                        //     backgroundColor: '#3e98c7',
                    })}
                />
            </div>
            <div className='mx-auto w-[300px] meterUsageLast mt-7 ' >
                <div className='flex mx-auto w-[60%] justify-between' >
                    <p>Total Expenses</p>
                    <p>Cost</p>
                </div>
                <div className='flex justify-between mt-3 mx-auto' >
                    <div className='flex flex-col items-center' >
                        <p>Total (KWH)</p>
                        <p className='font-bold' >0</p>
                    </div>
                    <div className='flex flex-col items-center' >
                        <p>Total</p>
                        <p className='font-bold' >0</p>
                    </div>
                    <div className='flex flex-col items-center' >
                        <p>Total (KWH)</p>
                        <p className='font-bold' >0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeterUsage