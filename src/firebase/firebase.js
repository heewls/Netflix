import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig, 'myfirebaseapp');

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app, "https://nunutv-c9b2c-default-rtdb.asia-southeast1.firebasedatabase.app/");

export { database }