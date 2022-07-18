import React from 'react';
import Navigation from '../components/navigation';
import './Dashboard.css';
import Adminsidebar from './Adminsidebar';

function Dashboard() {
  return (
    <div className='main-container1'>

        <Navigation/>
        
        <div className='side-bar'>
            <Adminsidebar/>
        </div>

    </div>
  )
}

export default Dashboard