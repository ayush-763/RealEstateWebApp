// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-a712b.firebaseapp.com",
  projectId: "realestate-a712b",
  storageBucket: "realestate-a712b.firebasestorage.app",
  messagingSenderId: "1013495044528",
  appId: "1:1013495044528:web:b40fbde02ed0f7e1f8de75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
