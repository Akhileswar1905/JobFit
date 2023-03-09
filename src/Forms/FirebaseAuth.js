// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLTm6Zat6VzKRVmGTkiRokfSGrIn8hrDs",
  authDomain: "jobfit-37d1f.firebaseapp.com",
  projectId: "jobfit-37d1f",
  storageBucket: "jobfit-37d1f.appspot.com",
  messagingSenderId: "296116594948",
  appId: "1:296116594948:web:ac72f9d56851225ccac851",
  measurementId: "G-2PMPD1KPQN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
