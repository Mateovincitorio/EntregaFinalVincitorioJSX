import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXyeQzeDrgnla2qc4eZofUC9srhZFdb5k",
  authDomain: "fast-commerce-cd9bc.firebaseapp.com",
  projectId: "fast-commerce-cd9bc",
  storageBucket: "fast-commerce-cd9bc.appspot.com",
  messagingSenderId: "248934694676",
  appId: "1:248934694676:web:44ccbd7c0e0b8643a74c01"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db