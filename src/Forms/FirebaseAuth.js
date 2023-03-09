// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLTm6Zat6VzKRVmGTkiRokfSGrIn8hrDs",
  authDomain: "jobfit-37d1f.firebaseapp.com",
  projectId: "jobfit-37d1f",
  storageBucket: "jobfit-37d1f.appspot.com",
  messagingSenderId: "296116594948",
  appId: "1:296116594948:web:ac72f9d56851225ccac851",
  measurementId: "G-2PMPD1KPQN",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
