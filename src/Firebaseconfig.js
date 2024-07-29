// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa6LMx60sTsyGc1YwQhTkoDHAaHiONJkE",
    authDomain: "logindemo-efd04.firebaseapp.com",
    projectId: "logindemo-efd04",
    storageBucket: "logindemo-efd04.appspot.com",
    messagingSenderId: "669325397588",
    appId: "1:669325397588:web:0456812b54af7c1f0aa7c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage(app);