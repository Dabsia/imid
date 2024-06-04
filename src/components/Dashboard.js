import React from 'react'
import DashboardHeader from './DashboardComponents/DashboardHeader'
import MeterStatus from './DashboardComponents/MeterStatus'
import MeterReading from './DashboardComponents/MeterReading'
import MeterGraph from './DashboardComponents/MeterGraph'
import MeterUsage from './DashboardComponents/MeterUsage'

const Dashboard = () => {
    return (
        <div className='w-full bg-[#fafafa] p-7' >
            <DashboardHeader />
            <div className='mt-9 block md:flex ' >
                <MeterStatus />
                <MeterReading />
            </div>
            <div className='mt-9 flex meterDashboard justify-between w-full' >
                <MeterGraph />
                <MeterUsage />
            </div>
        </div>
    )
}

export default Dashboard