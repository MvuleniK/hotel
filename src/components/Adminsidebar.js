import React from 'react';
import './Adminsidebar.css';
import { Link } from "react-router-dom";
// import Addproduct from './components/Addproduct';

function Adminsidebar() {
  return (
    <div className='main-container1'>

        <nav className='side-navigation'>
                <div  className ='list' >
                    {/* <Link to= '/homepage'> <h3>Home</h3> </Link> */}
                    <h3>Booking</h3>
                </div>
                <div  className ='list' >
                    {/* <Link to= '/homepage'> <h3>Home</h3> </Link> */}
                    <h3>Rooms</h3>
                </div>
                <div  className ='list' >
                    <h3>Add rooms</h3>
                    {/* <Addproduct/> */}
                    {/* <Link to= '/addproduct'> <h3>Add rooms</h3> </Link> */}
                </div>
                <div  className ='list' >
                    {/* <Link to= '/homepage'> <h3>Home</h3> </Link> */}
                    <h3>Remove rooms</h3>
                </div>
                <div  className ='list' >
                    {/* <Link to= '/homepage'> <h3>Home</h3> </Link> */}
                    <h3>Edit rooms</h3>
                </div>

        </nav>

    </div>
  )
}

export default Adminsidebar