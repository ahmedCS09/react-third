// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc, addDoc ,collection } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDB-QGGWaeD4H0RrootadmRgohPpwb90E",
  authDomain: "project-3-9c179.firebaseapp.com",
  projectId: "project-3-9c179",
  storageBucket: "project-3-9c179.firebasestorage.app",
  messagingSenderId: "107532460214",
  appId: "1:107532460214:web:5ae95cf08909bcaa1a8617",
  measurementId: "G-J1KGPRZHMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth()

export { onAuthStateChanged, db, doc, setDoc, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, addDoc, collection }