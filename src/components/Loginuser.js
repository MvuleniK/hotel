import './Loginuser.css';
import React, {useState} from 'react';
// import {Link } from "react-router-dom";
// import {auth} from './firebase';
import image from 'img.jpg';


function Loginuser() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  return (

    
    <div className='main-container'>

    <div className='inner-container'>
          
          <div className='left-container'>
              <img alt='' className='logo-left'>

              </img>


              <div className='signin-header'>
              <h1>Sign in</h1>
              <p className="" >
                if you don't have an account register you can register
                {/* <Link to="/Registeruser">Register</Link> */}
              </p>
              </div>

              
              <form>

                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address"/>

                <br></br>  

                <h5>Password</h5>
                <input type= 'password' value={password} onChange={e=> setPassword(e.target.value)} placeholder="Enter your Password"/>

                <br></br>
                <button type='submit' className='login__signInButton'>Login </button>
              </form>

          </div>
          
          <div className='right-container'>

                <img src = {img1} alt="city" />
                <h1>
                  Sign in to the Rand Hotel
                </h1>
                <p>
                  Hotel as unique as your
                  comforability
                </p>
          </div>

      </div>


    </div>


  )
}

export default Loginuser