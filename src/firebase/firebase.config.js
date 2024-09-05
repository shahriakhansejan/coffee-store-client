// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmWEx13sLVSUVHBFxawIoDy4cLgex0xrs",
  authDomain: "coffee-store-c3d6d.firebaseapp.com",
  projectId: "coffee-store-c3d6d",
  storageBucket: "coffee-store-c3d6d.appspot.com",
  messagingSenderId: "93190083414",
  appId: "1:93190083414:web:07a4bb394c56946313bcf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;