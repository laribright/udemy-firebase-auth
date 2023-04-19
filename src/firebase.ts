import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAITBAIAUDUqw7DBKj7KgItSCkHCVNT-TY",
  authDomain: "fir-auth-557cc.firebaseapp.com",
  projectId: "fir-auth-557cc",
  storageBucket: "fir-auth-557cc.appspot.com",
  messagingSenderId: "869593997618",
  appId: "1:869593997618:web:1f3287cf0f0a5cd53a372b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
