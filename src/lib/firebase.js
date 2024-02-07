// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrCwTR2Qg98Lbr1qejfll2k01vCP77Lm4",
  authDomain: "react-app-ifaz.firebaseapp.com",
  databaseURL: "https://react-app-ifaz-default-rtdb.firebaseio.com",
  projectId: "react-app-ifaz",
  storageBucket: "react-app-ifaz.appspot.com",
  messagingSenderId: "709318665389",
  appId: "1:709318665389:web:780f83899d8faf02095224",
  measurementId: "G-5T15RJ4FHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const usersRef = collection(db, 'users')
export const productsRef = collection(db, 'products')
export const categoriesRef = collection(db, 'categories')
export const blogsRef = collection(db, 'blogs')

export default app;
