// firebase-init.js

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL5f8Mwk0qoaKBdXh0w2isNRCPSfgBL1g",
  authDomain: "custom-practice-xperts.firebaseapp.com",
  projectId: "custom-practice-xperts",
  storageBucket: "custom-practice-xperts.firebasestorage.app",
  messagingSenderId: "348008678781",
  appId: "1:348008678781:web:a57738e0b878b4b8d97814",
  measurementId: "G-D5V8DPLK6F"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
