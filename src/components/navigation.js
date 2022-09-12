import React from 'react';
import './navigation.css';
import Logo from "../assest/Logo.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className='navigation'>

                <div className ='navigation-logo'>
                    <img id = "img-logo" src={Logo} alt="logo" />

                    {/* <h1 style={{ color: "#484848",
                                textAlign: "center",
                                marginTop: "-50px", 
                                position:"absolute",
                                left:'-5%',
                                top:'70%',
                                fontWeight:'800',
                                fontSize:'40px',
                                }}>
                        Rand Hotel
                    </h1> */}

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
                <Link to= '/loginuser' style={{ textDecoration: 'none',color: '#ffb01d'  }} ><h3 className='button1' id='button1' >Log In</h3></Link>
                {/* <h3 className='button1' id='button1' >Log In</h3> */}
              </div>

              <div  className ='list'  >
                <Link to ='/registeruser' style={{ textDecoration: 'none',color: '#ffb01d'  }}><h3 className='button2' id='button2'>Sign Up</h3></Link>
              </div>

    </div>
  )
}

export default Navigation;