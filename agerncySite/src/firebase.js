import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr_UaP8wmfzouLAdxFL5VT5uNgf-Em1V4",
  authDomain: "agerncysite.firebaseapp.com",
  projectId: "agerncysite",
  storageBucket: "agerncysite.firebasestorage.app",
  messagingSenderId: "88716748875",
  appId: "1:88716748875:web:9126cb0e449482e47e85ce",
  measurementId: "G-CH56PPKQFZ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
