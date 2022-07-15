import React from 'react'
import Logo from "../rooms/assest/Logo.png";

function payment() {
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

        <div className='payment-container'>
            <h2>Your Payment Details</h2>

            <input
                label = "FULL NAME"
                placeholder="Enter in your full name"
                name="Fullname"
                type="text"
                className="input-fields-1"
                />
            <input
                label = "CARD NUMBER"
                placeholder="Enter in your email"
                name="email"
                type="email"
                className="input-fields-1"
                />

                {/* expiration date */}
              <div class="dropdown-menu">
                <a class="" href="#">Add</a>
                <a class="dropdown-item" href="#">Edit</a>
                <a class="dropdown-item" href="#">Delete</a>
                
            </div>

            <input
                label = "CVC"
                placeholder="123"
                name="cvc"
                type="number"
                className="input-fields-1"
                />

            <input
                label = "Total price"
                placeholder="Enter in your email"
                name="email"
                type="email"
                className="input-fields-1"
                />  


        </div>


    </div>
  )
}

export default payment