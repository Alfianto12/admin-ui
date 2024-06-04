// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librarie

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-36872.firebaseapp.com",
  projectId: "store-tutorial-36872",
  storageBucket: "store-tutorial-36872.appspot.com",
  messagingSenderId: "27126026802",
  appId: "1:27126026802:web:73e8eb9d63e3de9654a22b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();