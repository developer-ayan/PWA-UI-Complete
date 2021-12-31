// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { doc ,collection } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB3WKDe64DyW7x-0VIh8eS4m7ElVbtL0QA",
  authDomain: "university-web-fc11d.firebaseapp.com",
  projectId: "university-web-fc11d",
  storageBucket: "university-web-fc11d.appspot.com",
  messagingSenderId: "434658610469",
  appId: "1:434658610469:web:5e7c012b35cb204827decc",
  measurementId: "G-562L7WGGCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()