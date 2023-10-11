import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEr15BytjOA_g5pMz1enJfypVmMuVI_pA",
  authDomain: "chat-5dbcf.firebaseapp.com",
  projectId: "chat-5dbcf",
  storageBucket: "chat-5dbcf.appspot.com",
  messagingSenderId: "140899648747",
  appId: "1:140899648747:web:3e2a350ddd3f9928af2aae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
