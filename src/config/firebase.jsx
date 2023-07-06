// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDltvy8keiQ-zbXsXAJVkNOnupNjdspcLo",
  authDomain: "stayquest-hotel.firebaseapp.com",
  projectId: "stayquest-hotel",
  storageBucket: "stayquest-hotel.appspot.com",
  messagingSenderId: "135858575997",
  appId: "1:135858575997:web:71ba7ab3af83a2afbf6f14",
  measurementId: "G-NL7C2278TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export {auth}