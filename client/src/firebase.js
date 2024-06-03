// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxIsnBH68Y9BxWPldX80kPtAftaac0D14",
  authDomain: "mern-estate-fe0e9.firebaseapp.com",
  projectId: "mern-estate-fe0e9",
  storageBucket: "mern-estate-fe0e9.appspot.com",
  messagingSenderId: "441692984348",
  appId: "1:441692984348:web:1c1bfd6a19060ed00fbbd9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);