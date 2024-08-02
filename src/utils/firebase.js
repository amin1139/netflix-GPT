// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkasnct61Vtj_v6HypKCxxYbkMMQPW4Ek",
  authDomain: "netflixgpt-e4feb.firebaseapp.com",
  projectId: "netflixgpt-e4feb",
  storageBucket: "netflixgpt-e4feb.appspot.com",
  messagingSenderId: "814441317953",
  appId: "1:814441317953:web:4273f6f32d67a86eef28c0",
  measurementId: "G-X246TSQ0NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();