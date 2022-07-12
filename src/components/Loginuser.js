import './Loginuser.css';
import { useNavigate } from "react-router-dom";
import React, {useState,useEffect} from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged,createUserWithEmailAndPassword} from "firebase/auth"; 
import { auth } from "../firebase.js";
import './Registeruser';
// import {Link } from "react-router-dom";
// import {auth} from '..firebase.js';
// import image from 'img.jpg';


function Loginuser() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering,setIsRegistering] = useState(false);
    const [registerInformation,setRegisterInformation] = useState({
        email: "",
        confirmEmail: "",
        // fullname:"",
        // phone:"",
        password: "",
        confirmPassword: "",

    });

    const navigate = useNavigate();



    // const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            navigate("/");
          }
        });
      },[]);

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate("/");
          })
          .catch((err) => alert(err.message));
      };

      const handleRegister = () => {
        if (registerInformation.email !== registerInformation.confirmEmail) {
          alert("Please confirm that email are the same");
          return;
        } else if (
          registerInformation.password !== registerInformation.confirmPassword
        ) {
          alert("Please confirm that password are the same");
          return;
        }
        createUserWithEmailAndPassword(
          auth,
          registerInformation.email,
          registerInformation.password
        )
          .then(() => {
            navigate("/");
          })
          .catch((err) => alert(err.message));
      };
    

  
  return (

    
            <div className='main-container'>

                    <div className='inner-container'>
                    
                    <div className='signin-header'>
                        <h1>Sign in</h1>
                        <p className="" >
                            if you don't have an account register you can register
                        </p>
                    </div>

                {/*/////////////////////////////// login-register-container ////////////////////*/}
                    <div className="form">
                    {isRegistering ? (
                    <>
                        <input type="email" placeholder="Email" value={registerInformation.email} onChange={(e) => setRegisterInformation({ ...registerInformation, email: e.target.value})}/>

                        <input
                        type="email"
                        placeholder="Confirm Email"
                        value={registerInformation.confirmEmail}
                        onChange={(e) =>
                            setRegisterInformation({
                            ...registerInformation,
                            confirmEmail: e.target.value
                            })
                        }
                        />
                        <input
                        type="password"
                        placeholder="Password"
                        value={registerInformation.password}
                        onChange={(e) =>
                            setRegisterInformation({
                            ...registerInformation,
                            password: e.target.value
                            })
                        }
                        />
                        <input
                        type="password"
                        placeholder="Confirm Password"
                        value={registerInformation.confirmPassword}
                        onChange={(e) =>
                            setRegisterInformation({
                            ...registerInformation,
                            confirmPassword: e.target.value
                            })
                        }
                        />
                        <button className="sign-in-register-button" onClick={handleRegister}>Register</button>
                        <button className="create-account-button" onClick={() => setIsRegistering(false)}>Go back</button>
                    </>
                    ) : (
                    <>
                        <input type="email" placeholder="Email" onChange={handleEmailChange} value={email} />
                        <input
                        type="password"
                        onChange={handlePasswordChange}
                        value={password}
                        placeholder="Password"
                        />
                        <button className="sign-in-register-button" onClick={handleSignIn}>
                        Sign In
                        </button>
                        <button
                        className="create-account-button"
                        onClick={() => setIsRegistering(true)}
                        >
                        Create an account
                        </button>
                    </>
                    )}
                </div>

                <div className='right-container'>

                        {/* <img src = {img1} alt="city" /> */}
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