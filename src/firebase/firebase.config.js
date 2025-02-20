// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwwfjIHoFEKATeQ7TUnYW3hx6BTgL7wQg",
  authDomain: "coffestore-44ac7.firebaseapp.com",
  projectId: "coffestore-44ac7",
  storageBucket: "coffestore-44ac7.firebasestorage.app",
  messagingSenderId: "821130872908",
  appId: "1:821130872908:web:520f873e563dcfc5640ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app