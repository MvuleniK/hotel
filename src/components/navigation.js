import React from 'react';
import './navigation.css';
import Logo from "../assest/Logo.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className='navigation'>

                <div className ='navigation-logo'>
                    <img id = "img-logo" src={Logo} alt="logo" />
                </div>
                
                <div  className ='list' >
                    <Link to= '/homepage'> <h3>Home</h3> </Link>
                </div>    
                <div className ='list' >
                    <Link to ='/roomA'> <h3>Booking</h3> </Link>
                </div>
                
                <div  className ='list' >
                    <Link to= '/loginuser'><h3>My Account</h3></Link>
                </div>
                <div  className ='list'  >
                    <h3>Admin</h3>
                </div>

                <div  className ='list'  >
                    {/* <Link to ='/loginuser' ></Link> */}
                    <h3 className='button1' id='button1' >Log In</h3>
                </div>

                <div  className ='list'  >
                {/* <Link to ='/registeruser' ></Link> */}
                    <h3 className='button2' id='button2'>Sign Up</h3>
                </div>

    </div>
  )
}

export default Navigation;