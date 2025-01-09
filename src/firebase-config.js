// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQFHbtgvWh_Oeb9x24W5dH5n-nIAYHwvU",
    authDomain: "yappr-1b993.firebaseapp.com",
    projectId: "yappr-1b993",
    storageBucket: "yappr-1b993.firebasestorage.app",
    messagingSenderId: "279462842291",
    appId: "1:279462842291:web:77bf4559bc3950975c45c6",
    measurementId: "G-PC78V5KG5J"
  };
  


// Initialize Firebase and export services
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);