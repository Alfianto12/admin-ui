// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-59364.firebaseapp.com",
  projectId: "store-tutorial-59364",
  storageBucket: "store-tutorial-59364.appspot.com",
  messagingSenderId: "1032959665263",
  appId: "1:1032959665263:web:623fad315a34cea708199a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();