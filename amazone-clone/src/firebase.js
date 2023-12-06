// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3FpsMjdlRD8KpmRObEjDjRIGjtKhhIFo",
  authDomain: "e-clone-c0889.firebaseapp.com",
  projectId: "e-clone-c0889",
  storageBucket: "e-clone-c0889.appspot.com",
  messagingSenderId: "963875448790",
  appId: "1:963875448790:web:fe49be55a61c4880c82677",
  measurementId: "G-5GSRXVF2BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };