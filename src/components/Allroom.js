import React from 'react';
import React,{useState, useEffect} from 'react';
// import Roomcontainer from './Roomcontainer';
import {collection, query, onSnapsnot, getDocts} from 'firebase/firestore';
import {db} from "../firebase";


function Allroom() {

    const[rooms, setRooms] = useState([]);
    useEffect(() =>{
        const getProducts = getRooms 
    } )



  return (
    <div className='main-container'>Allroom
        <div className='allproducts-maincontainer'>

        </div>
    </div>
  )
}

export default Allroom