import React from 'react';
import './Homepage.css';
import Logo from "../assest/Logo.png"

function Homepage() {
  return (
    <div className='main-container'>

        <div className='navigation'>

                <div className ='navigation-logo'>
                    <img id = "img-logo" src={Logo} alt="logo" />
                </div>
                
                <div  className ='list' >
                    <h3>Home</h3>
                </div>    
                <div className ='list' >
                    <h3>Booking</h3>
                </div>
                
                <div  className ='list' >
                    <h3>My Account</h3>
                </div>
                <div  className ='list'  >
                    <h3>Admin</h3>
                </div>

                <div  className ='list'  >
                    <h3 className='button1' id='button1' >Log In</h3>
                </div>

                <div  className ='list'  >
                    <h3 className='button2' id='button2'>Sign Up</h3>
                </div>

        </div>

        <div className='hotel-content'>

            <div className='hotel-content-gallery'>
                <h2>
                    Booking available at the Rand Hotel
                </h2>
                <h3>
                    Find and book unique accommodation
                </h3>
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
                        <h5>
                            Luxury room
                        </h5>
                        <h6>
                            Luxury suite
                        </h6>
                    </div>

                    <div className='room2'>
                    <h5>
                            Luxury room
                        </h5>
                        <h6>
                            Luxury suite
                        </h6>
                    </div>                    

                    <div className='room3'>
                    <h5>
                            Luxury room
                        </h5>
                        <h6>
                            Luxury suite
                        </h6>
                    </div>

                    <div className='room4'>
                    <h5>
                            Luxury room
                        </h5>
                        <h6>
                            Luxury suite
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
            <div className='uppper-hotel-footer '>
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
            </div>

            <div className='lower-hotel-footer'>
                <h5>copyright</h5>
            </div>

        </div>


    </div>
  )
}

export default Homepage