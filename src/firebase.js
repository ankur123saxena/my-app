// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config
  apiKey: "AIzaSyA8aUzjYqGjkkSlUDytaY3qA6JPV-wtOPs",
  authDomain: "ec-shop-8730b.firebaseapp.com",
  databaseURL: "https://ec-shop-8730b-default-rtdb.firebaseio.com",
  projectId: "ec-shop-8730b",
  storageBucket: "ec-shop-8730b.appspot.com",
  messagingSenderId: "981171897999",
  appId: "1:981171897999:web:0de0236653455bfb2c52fa",
  measurementId: "G-6D7N1XHTSD"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
