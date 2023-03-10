import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
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
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
