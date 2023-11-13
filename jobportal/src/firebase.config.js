// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaoLDuvHNZeKHGYuX--wCkiJvrhPKEDuw",
  authDomain: "job-portal-a1612.firebaseapp.com",
  projectId: "job-portal-a1612",
  storageBucket: "job-portal-a1612.appspot.com",
  messagingSenderId: "820696688119",
  appId: "1:820696688119:web:2468d1418b21a9e1b3faf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export {db}