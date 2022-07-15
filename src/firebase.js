// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {getFireStore} from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbN8dmO59LzbFqDdWIMNpioTVPUL4USTo",
  authDomain: "hotelbook-bc97b.firebaseapp.com",
  projectId: "hotelbook-bc97b",
  storageBucket: "hotelbook-bc97b.appspot.com",
  messagingSenderId: "995481901943",
  appId: "1:995481901943:web:363eeac2bcf33440639f72"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const auth = getAuth(app);


// export {auth};