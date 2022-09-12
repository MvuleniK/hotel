import React from 'react';
import './roomA.css';
import Logo from "../rooms/assest/Logo.png";
import Luxury from '../assest/nav/hotel/luxury.png';
import Allroom from '../Allroom';
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import {collection, query, onSnapsnot, getDocts, getDocs, addDoc} from 'firebase/firestore';
import {app,db} from "../../firebase";
import {async} from '@firebase/util';



function RoomA() {

  const[numGuest, setNumGuest] = useState();
  const[typeofRoom, setTypeofRoom] = useState();
  const[dateCheckIn, setDateCheckIn] = useState();
  const[dateCheckOut, setDateCheckOut] = useState();
  const bookingCollectionRef = collection(db,"booking")


  const createBooking = async () => {
    await addDoc (bookingCollectionRef,{guest: numGuest, room: typeofRoom, checkin: dateCheckIn,checkout: dateCheckOut})
  }

  // const updateUser = async()

  // useEffect{() => {
  //   const get
  // }}


  return (
    <div className='main-container'>

        {/* Navigation */}

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
                <Link to= '/loginuser' style={{ textDecoration: 'none',color: '#ffb01d'  }} ><h3 className='button1' id='button1' >Log In</h3></Link>
                {/* <h3 className='button1' id='button1' >Log In</h3> */}
              </div>

              <div  className ='list'  >
                <Link to ='/registeruser' style={{ textDecoration: 'none',color: '#ffb01d'  }}><h3 className='button2' id='button2'>Sign Up</h3></Link>
              </div>

        </div>

        {/* Header content */}
        <div className='main-content'>

        <Allroom/>

        </div>



        {/* Booking content */}
        <div className='booking-content'>


                    {/* <form className='booking-container'> */}
                        <div className='column-1'>
                                    <label id='input-fields1'>Number of Guests</label>
                                    <input  
                                            label="Number of Guests"
                                            placeholder=""
                                            name="text"
                                            type="number"
                                            className="input-fields1"
                                            onChange={(event) => {setNumGuest(event.target.value)}}
                                    />

                                    <label id='input-fields2'>Date Checkin</label>  
                                    <input  
                                            label="Number of Guests"
                                            placeholder=""
                                            name="text"
                                            type="date"
                                            className="input-fields2"
                                            onChange={(event) => {setDateCheckIn(event.target.value)}}
                                    />            
                        </div>    

                        <div className='column-2'>


                        <label id='input-fields4'> Type of Room</label>
                        <select type='text' name="Type of Room" className='input-fields4'>
                            <option value="">--Please select the type of room-</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Family">Family</option>
                            <option value="Economy">Economy</option>
                            onChange={(event) => {setTypeofRoom(event.target.value)}}
                        </select>


                                <label id='input-fields3' >Date Checkout </label>
                                <input  
                                        label="Number of Guests"
                                        placeholder=""
                                        name="text"
                                        type="date"
                                        className="input-fields3"
                                        onChange={(event) => {setDateCheckOut(event.target.value)}}
                                />
                        </div>


                <button className='book-room' onClick={createBooking}>Book</button>

            {/* </form> */}


        </div>

        {/* footer */}
        <div>
            
        </div>


    </div>
  )
}

export default RoomA;