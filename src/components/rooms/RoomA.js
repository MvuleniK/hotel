import React from 'react';
import './roomA.css';
import Logo from "../rooms/assest/Logo.png";
import Luxury from '../assest/nav/hotel/luxury.png';
import Allroom from '../Allroom';

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

        <Allroom/>

        </div>



        {/* Booking content */}
        <div className='booking-content'>


        <div className='column-1'>
                    <label id='input-fields1'>Number of Guests</label>
                    <input  
                            label="Number of Guests"
                            placeholder=""
                            name="text"
                            type="number"
                            className="input-fields1"
                    />

                    <label id='input-fields2'>Date Checkin</label>  
                    <input  
                            label="Number of Guests"
                            placeholder=""
                            name="text"
                            type="date"
                            className="input-fields2"
                    />            
        </div>    

        <div className='column-2'>


        <label id='input-fields4'> Type of Room</label>
        <select name="Type of Room" className='input-fields4'>
               <option value="">--Please select the type of room-</option>
               <option value="Luxury">Luxury</option>
               <option value="Family">Family</option>
               <option value="Economy">Economy</option>
           </select>


                <label id='input-fields3' >Date Checkout </label>
                <input  
                        label="Number of Guests"
                        placeholder=""
                        name="text"
                        type="date"
                        className="input-fields3"
                />
        </div>








            
        </div>

        {/* footer */}
        <div>
            
        </div>


    </div>
  )
}

export default roomA;