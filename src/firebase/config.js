// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfIRlKzkrwq1LLLJxmkCfTUraVVhAeHbY",
  authDomain: "ecommerce-cesar-arias.firebaseapp.com",
  projectId: "ecommerce-cesar-arias",
  storageBucket: "ecommerce-cesar-arias.appspot.com",
  messagingSenderId: "690724761005",
  appId: "1:690724761005:web:b2c9a3a119487e3c43c524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);