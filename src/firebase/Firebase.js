// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_apiKey);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4t7i2iFeN1zabayqNcbdgmyb3uHqodGo",
  authDomain: "surveysky-c627d.firebaseapp.com",
  projectId: "surveysky-c627d",
  storageBucket: "surveysky-c627d.appspot.com",
  messagingSenderId: "658506640033",
  appId: "1:658506640033:web:7a1938dd54418c90061ee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);