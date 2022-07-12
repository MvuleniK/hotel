// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVspwbOiDcI8Zks8KDlLoB1YJ_VEWKlkE",
  authDomain: "hotel-a1205.firebaseapp.com",
  projectId: "hotel-a1205",
  storageBucket: "hotel-a1205.appspot.com",
  messagingSenderId: "269342408651",
  appId: "1:269342408651:web:89fbb78046b5aa6709c04e",
  measurementId: "G-0RFZZXHLQK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);