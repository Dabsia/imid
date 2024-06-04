import React from 'react'
import logo from '../assets/logo.png'
import man from '../assets/man.png'

const TopNav = ({ toggleSideBar }) => {
    return (
        <div className='bg-white flex justify-between p-4 border-b-2 border-[#f0f0f0]'>
            <img src={logo} alt='' className='object-contain' />
            <div className='flex items-center w-[200px] lg:w-[700px] justify-between' >
                <div className='flex' >
                    <i onClick={toggleSideBar} className="ri-menu-line mr-4 cursor-pointer"></i>
                    <h4 className='font-bold imidCustomers ' >IMID CUSTOMERS</h4>
                </div>
                <div className='border p-2 rounded-md items-center lg:flex w-[400px] hidden border-blue-300'>
                    <i className="ri-search-line text-[#3982aa] mr-3"></i>
                    <input type='text' placeholder='Search for assets' className='outline-none w-[100%] placeholder-[#3982aa]' />
                </div>

            </div>
            <div className='flex items-center'>
                <i className="ri-notification-3-fill cursor-pointer text-[#3982aa]"></i>
                <div className='flex ml-5 userInfo '>
                    <img src={man} alt='' className='h-12 userImage w-12 rounded-lg object-cover' />
                    <div className='ml-4 adminInfo'>
                        <h5 className='text-[#3982aa] font-bold text-[15px]' >Admin Manager</h5>
                        <p className='text-[13px]' >Abdul Ganui</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopNav