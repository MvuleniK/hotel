import React from 'react';
import './Homepage.css';
import Logo from "../assest/Logo.png";
import Swiper from './swiper/swiper';
// import { Autoplay } from 'swiper';
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className='main-container'>

        <div className='navigation'>

                <div className ='navigation-logo'>
                    <img id = "img-logo" src={Logo} alt="logo" />
                </div>
                
                <div  className ='list' >
                <Link to= '/homepage' style={{ textDecoration: 'none',color: '#484848' }} > <h3>Home</h3> </Link>
                </div>    

                
                <div className ='list' >
                <Link to ='/roomA' style={{ textDecoration: 'none',color: '#484848'  }} > <h3>Booking</h3> </Link>
                </div>
                
                <div  className ='list' >
                <Link to= '/loginuser' style={{ textDecoration: 'none',color: '#484848'  }} ><h3>My Account</h3></Link>
                </div>

                <div  className ='list'  >
                    <h3>Admin</h3>
                </div>

                <div  className ='list'  >
                    {/* <Link to ='/loginuser' ></Link> */}
                    <Link to= '/loginuser' style={{ textDecoration: 'none',color: '#ffb01d'  }} ><h3 className='button1' id='button1' >Log In</h3></Link>
                </div>

                <div  className ='list'  >
                {/* <Link to ='/registeruser' ></Link> */}
                    <Link to ='/registeruser' style={{ textDecoration: 'none',color: '#ffb01d'  }}><h3 className='button2' id='button2'>Sign Up</h3></Link>
                </div>

        </div>

        <div className='hotel-content'>

            <div className='hotel-content-gallery'>

                <div className='hotel-writing'>
                    <h2>
                        Booking available at the Rand Hotel
                    </h2>

                    <h3>
                        Find unique accommodation
                    </h3>
                </div>
                <div className='swiper-container'>
                    {/* Auto gallery goes here */}
                    <Swiper/>
                </div>
            </div>

        </div>


        <div className='booking-room'>
            <div className='booking-room-title'>
                <h2>
                   Available
                </h2>
                <h2>
                   Booking 
                </h2>
                <hr className='booking-room-line'>
                </hr>
            </div>
            <div className='booking-room-suite' >
                    <div className='room1'>
                    <Link to ='/roomA' style={{ textDecoration: 'none',color: 'white'  }}  >  
                        <h5>
                            Luxury room
                        </h5>
                        <h6>
                            Luxury suite
                        </h6>
                    </Link>
                    </div>

                    <div className='room2'>
                    <h5>
                            Business room
                        </h5>
                        <h6>
                            Business suite
                        </h6>
                    </div>                    

                    <div className='room3'>
                    <h5>
                            Economy room
                        </h5>
                        <h6>
                            Economy suite
                        </h6>
                    </div>

                    <div className='room4'>
                    <h5>
                            Family room
                        </h5>
                        <h6>
                            Family suite
                        </h6>
                    </div>
            </div>

            <div className='hotel-banner'>
                <h1>
                Our Special offers : 5% 
                <br></br>
                 discount for visa lounge
                <br></br> 
                members 
                </h1>
            </div>


        </div>

        <div className='hotel-footer '>


            <Footer/>
            {/* <div className='grid-container'>


                <div className='uppper-hotel-footer-1'>
                    <h1>LOGO</h1>
                </div>

                <div className='uppper-hotel-footer-2'>
                    <ul>
                        <li><h2>HOME</h2></li>
                        <li>Booking</li>
                        <li>About Us</li>
                        <li>My Acount</li>
                        <li>Admin</li>
                    </ul>
                </div>

                <div className='uppper-hotel-footer-3'>
                    <ul>
                        <li><h2>SUPPORT</h2></li>
                        <li>Help center</li>
                        <li>Safety information</li>
                        <li>Cacellation options</li>
                        <li>Our COVID-19 Response</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className='uppper-hotel-footer-4'>
                    <ul>
                            <li><h2>CONTACT INFO</h2></li>
                            <li>Phone:123456789</li>
                            <li>Email: info@randhotel.co.za</li>
                            <li>Location:Location:100 Rissik Street, JHB, SA</li>
                            <li>FAQs</li>
                    </ul>
                </div>
            </div> */}

            {/* <div className='lower-hotel-footer'>
                <h5>copyright</h5>
            </div> */}

        </div>


    </div>
  )
}

export default Homepage;