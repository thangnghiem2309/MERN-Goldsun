// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-goldsun-29b4b.firebaseapp.com",
  projectId: "mern-goldsun-29b4b",
  storageBucket: "mern-goldsun-29b4b.appspot.com",
  messagingSenderId: "536923954035",
  appId: "1:536923954035:web:b5851343901c14f9fc0306"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);