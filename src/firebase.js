import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7rvZa-_yXG3kVNOWWs0dkhJz-n3TNoXs",
  authDomain: "e-commerce-ecdd5.firebaseapp.com",
  projectId: "e-commerce-ecdd5",
  storageBucket: "e-commerce-ecdd5.appspot.com",
  messagingSenderId: "365837911846",
  appId: "1:365837911846:web:9c066a27dc746dba3463e7",
  measurementId: "G-C3WN4ZPL5M",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
