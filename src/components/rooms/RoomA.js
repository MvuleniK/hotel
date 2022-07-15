import React from 'react';
import './roomA.css';
import Logo from "../rooms/assest/Logo.png";
import Luxury from '../assest/nav/hotel/luxury.png';

function roomA() {
  return (
    <div className='main-container'>

        {/* Navigation */}

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

        {/* Header content */}
        <div className='main-content'>

          <div className='room-image'>
            <img className='Luxury' src={Luxury} alt="img1" />
        </div>  
          <h1>Type of Room: Luxury</h1>
          <h2 className='nights'>Price per night: R5000.00</h2>
          <div className='Room-features'>
            <h3> Room features</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco 
            </p>
          </div>
            <div className='Room-description'>
            <h3> Room description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco 
            </p>
            </div>

        </div>

        {/* Booking content */}
        <div className='booking-content'>

        <label id='input-fields1'>Number of Guests
        </label>
        <input  
                label="Number of Guests"
                placeholder=""
                name="text"
                type="number"
                className="input-fields1"
        />

        <label>Date Checkin
        <input  
                label="Number of Guests"
                placeholder=""
                name="text"
                type="date"
                className="input-fields2"
        />


        </label>


        <label>Date Checkin
        <input  
                label="Number of Guests"
                placeholder=""
                name="text"
                type="date"
                className="input-fields3"
        />


        </label>



            
        </div>

        {/* footer */}
        <div>
            
        </div>


    </div>
  )
}

export default roomA;