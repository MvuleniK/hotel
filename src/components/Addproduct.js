import React,{useState,useEffect} from 'react';
import {auth,db, storage} from '../firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { collection, getDocs, query, where, doc, updateDoc, addDoc} from 'firebase/firestore';
import './Addproduct.css';

function Addproduct() {
  
          const [productitle, setProductTitle] = useState("");
          const [price, setPrice] = useState("");
          const [features, setFeatures] = useState("");
          const [roomtype , setRoomtype] = useState("");
          const [description, setDescription] = useState("");
          const [productimage, setProductImage] = useState("");

          const [imageError, setImageError] = useState("");
          const [successMsg, setSuccessMsg] = useState("");
          const [uploadError, setUploadError] = useState("");

          const types = ['image/jpg','image/jpeg','image/png','image/gif']
          const HandleProductImage = (e)=> {
                e.preventDefault();
                let selectedFile = e.target.files[0];

                if(selectedFile){
                    if(selectedFile && types.includes(selectedFile.type)){
                      setProductImage(selectedFile);
                      setImageError('')
                    }
                    else{
                      setProductImage(null)
                      setImageError('please select a valid image type:png,jpeg,jpg & gif')
                    }
            }
            else {
                setImageError('please select your file')
            }

          }


          const handleAddProduct = (e) => {
            e.preventDefault();

            const storageRef = ref(storage, 'room-images${roomtypes.toUpperCase()}/${Date.now()}')
            console.log(storageRef._location.path)

            uploadBytes(storageRef,productimage)
                .then(() =>{
                  getDownloadURL(storageRef).then(url => {
                    addDoc(collection(db,"room-${roomtype}"),{
                      productitle,
                      price,
                      features,
                      roomtype,
                      description,
                      productimage:url
                    })
                  })
                })
          }


  return (
    <div className='main-container'>
        <form className='add-room' onSubmit={handleAddProduct}>
            <p>Add Room</p>
            {successMsg && <div className='success-msg'>{successMsg}</div>}
            {uploadError && <div className='error-msg'>{uploadError}</div>}
            
            <label>Product Title</label>
            <input type='text' onChange={(e)=>{setProductTitle(e.target.value)}} placeholder="Product-title"/>
            <label>Price</label>
            <input type='text' onChange={(e)=>{setPrice(e.target.value)}} placeholder="Price"/>
            <label>Features</label>
            <input type='text' onChange={(e)=>{setFeatures(e.target.value)}} placeholder="Features"/>
            <label>Description</label>
            <input type='text' onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description"/>
            <label>Type of Room</label>
            <input type='text' onChange={(e)=>{setRoomtype(e.target.value)}} placeholder="Type of Room"/>
            <label>ProductImage</label>
            <input  onChange={HandleProductImage} type='file'/>
            {imageError && <>
                <div className='error-msg'>{imageError}</div>
            </>}

            <button type ='submit'>Add room</button>
        </form>

    </div>
  )
}

export default Addproduct;