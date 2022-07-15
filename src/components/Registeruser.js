import React from 'react';
import './Registeruser.css';
// import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
// import image from '../assest/nav/img.jpg'


function Registeruser() {

    const [email, setEmail ] = useState('');
    const [password,setPassword] = useState(''); 

    // const navigate = useNavigate();


    const Register = () =>{
        createUserWithEmailAndPassword (auth,email,password).then(()=>{
            window.location('/')
            // navigate('/Loginuser'); 
        }).catch((error)=>{
            console.log(error);
        })
    };

  return (
    <div className='main-container'>

        <div className='Logo'>
            <h1>Rand Hotel</h1>
        </div>
        

        <div className='inner-container'>
        <div className='signin-header'>
                        <h1>Sign up</h1>
                        <p className="" >
                            if you already have an account register you can Login here!
                        </p>
            </div>
            <div className='form'>
                    <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="input-fields-1"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <br></br>

                    <br></br>


                    <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="input-fields-2"
                    onChange={(e) => setPassword(e.target.value)}
                    />


                    <button onClick={Register }>Sign up</button>
            </div>
        </div>

        <div className='right-container'>

        <div className='right-container-content'>
            <h1>
            Sign up to the Rand Hotel
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

export default Registeruser;