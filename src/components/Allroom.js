import React from 'react';
import { useState, useEffect } from 'react';
// import Roomcontainer from './Roomcontainer';
import {collection, query, onSnapsnot, getDocts, getDocs} from 'firebase/firestore';
import {db} from "../firebase";
import Productscontainer from './productscontainer';
import './Allroom.css';

const Allroom = (props) => {

  // window.location.reload(false);

    const[rooms, setRooms] = useState([]);
    useEffect(() =>{
        const getProducts = () => {


          const roomsArray = [];
          // const path = 'products-${props.type.toUpperCase()}';
          const path = 'room-types';
          console.log(props);

          getDocs(collection(db,path)).then((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
              console.log(doc.id, "=>", doc.data());
                roomsArray.push({...doc.data(),id:doc.id});
            });
            setRooms(roomsArray);
            console.log('done');

          }).catch('Error error error')
        }
        getProducts(); 
    },[])



  return (
    <div className='main-container'>


        {rooms.map((room) => (
              <Productscontainer
                key={room.id}
                room={room}
                />
            ))}
 
        {/* <div className='allproducts-maincontainer'>


        </div> */}
    </div>
  )
}

export default Allroom