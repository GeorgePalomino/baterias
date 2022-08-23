
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZlh2pA-8-qBI88AuTxoYIN8GYmvb6PWk",
  authDomain: "ecommerce-baterias.firebaseapp.com",
  projectId: "ecommerce-baterias",
  storageBucket: "ecommerce-baterias.appspot.com",
  messagingSenderId: "192495933465",
  appId: "1:192495933465:web:972e1c65cac5c2f2b07288",
  measurementId: "G-4J4E6Q60DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;