import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APY_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_SENDER_ID,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID 
};

const app: any = initializeApp(firebaseConfig);

export default app;