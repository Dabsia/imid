import React, { useState } from 'react'

import TopNav from './components/TopNav';
// import SideBar2 from './components/SideNav2';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';

function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSideBarOpen(prev => !prev)
  }

  return (
    <div className='h-full w-full bg-white relative' >
      <TopNav toggleSideBar={toggleSideBar} />
      {/*<SideBar2 toggleSideBar={toggleSideBar} />*/}
      <div className='flex' >
        {isSideBarOpen && <SideBar />}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
