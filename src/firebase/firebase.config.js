// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2cv76_HSiVZfOkg5L8GN1KVCMNI4iyIQ",
  authDomain: "todo-app-22a5f.firebaseapp.com",
  projectId: "todo-app-22a5f",
  storageBucket: "todo-app-22a5f.appspot.com",
  messagingSenderId: "1087689990281",
  appId: "1:1087689990281:web:d6310b9c7dd073f43c2658",
  measurementId: "G-RM899KNNFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;