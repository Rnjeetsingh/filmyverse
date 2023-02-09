// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHWAjZ7Y7nEnLJ-b6F2DxhI_ZdyxjBxfY",
  authDomain: "filmyverse-fd46e.firebaseapp.com",
  projectId: "filmyverse-fd46e",
  storageBucket: "filmyverse-fd46e.appspot.com",
  messagingSenderId: "648138843388",
  appId: "1:648138843388:web:b39de5e8d6e2295be2e379",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");


export default app;
