// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "newstoday-52c1f.firebaseapp.com",
  projectId: "newstoday-52c1f",
  storageBucket: "newstoday-52c1f.appspot.com",
  messagingSenderId: "1098599483072",
  appId: "1:1098599483072:web:b08ff6f319e5dd77da8f25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);