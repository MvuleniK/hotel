import React from 'react';
import { Link } from "react-router-dom";
import {auth, db } from '../firebase';
import {collection,getDocs, query, where} from 'firebase/firestore';
import './productscontainer.css';

const Productscontainer = (room) => {

    


  return (


    <div className='main-content'>


        <div className='room-image'>
            <img className='room-image' src={room.room.productimage}/>
        </div> 
        <Link to={'/room-types/${p.id}/${p.productitle}/${p.price}/${features}'} > </Link>
        <h1 className='producttitle' >Type of room: {room.room.productitle}</h1>
        <h2 className='nights'>Price per night : {room.room.price}</h2>
          
        <div className='room-features'>
            <h3> Room features</h3>
            <p >Room features{room.room.features}</p>
        </div>

        <div className='room-description'>
            <h3> Room description</h3>
            <p>Room features{room.room.description}</p>
        </div> 
            
                    {/* <p className='producttitle'>Type of room: {room.room.productitle}</p> */}
                    {/* <p className='room-price'>Price per night : {room.room.price}</p>
                    <p className='room-features'>Room features{room.room.features}</p> */}
                    {/* <p className='room-description'>Room features{room.room.description}</p>  */}

        {/* <div className='main-content'> 
 
        </div> */}

        
    </div>
    
  )
}

export default Productscontainer;