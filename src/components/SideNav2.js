import React from 'react'

const SideBar2 = () => {
    return (
        <div className='bg-[white] w-[80%] md:w-[40%] mobileSideNav lg:w-[20%] h-screen p-6 border-r-2 border-[#f0f0f0] overflow-y-hidden' >
            <h3 className='text-[#555] font-bold' >MENU</h3>
            <ul className='list-none mt-5' >
                <li className=' flex items-center cursor-pointer mb-9 ' >
                    <i className="ri-dashboard-fill  text-[#ccc] mr-3"></i>
                    <span className='font-medium text-[#ccc]' >Dashboard</span>
                </li>
                <li className=' flex items-center mb-9 cursor-pointer ' >
                    <i className="ri-device-recover-fill text-[#ccc] mr-3"></i>
                    <span className='font-medium text-[#ccc]' >IMID Device</span>
                </li>
                <li className=' flex items-center mb-9 cursor-pointer ' >
                    <i className="ri-bar-chart-2-fill text-[#ccc] mr-3"></i>
                    <span className='font-medium text-[#ccc]' >IMID Data</span>
                </li>
                <li className=' flex items-center mb-9 cursor-pointer ' >
                    <i className="ri-team-fill  text-[#3982aa] mr-3"></i>
                    <span className='font-bold text-[#3982aa]' >IMID Customers</span>
                </li>
                <li className=' flex items-center mb-9 cursor-pointer ' >
                    <i className="ri-article-fill text-[#ccc] mr-3"></i>
                    <span className='font-medium text-[#ccc]' >Transaction</span>
                </li>
                <li className=' flex items-center mb-9 cursor-pointer ' >
                    <i className="ri-user-fill text-[#ccc] mr-3"></i>
                    <span className='font-medium text-[#ccc]' >Profile Settings</span>
                </li>
                <li className=' flex items-center mb-9 cursor-pointer ' >
                    <i className="ri-questionnaire-fill text-[#ccc] mr-3"></i>
                    <span className='font-medium text-[#ccc]' >Help & Support</span>
                </li>
                <li className=' flex items-center mb-9 cursor-pointer ' >
                    <i className="ri-logout-box-fill  text-[#ccc] mr-3"></i>
                    <span className='font-medium text-[#ccc]' >Logout</span>
                </li>
            </ul>
        </div >
    )
}

export default SideBar2