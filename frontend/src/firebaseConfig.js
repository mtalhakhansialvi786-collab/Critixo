import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect, 
    getRedirectResult 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd3huW5yWGdLHaee2Lknw9I3nCvkdqlcE",
  authDomain: "critixo.firebaseapp.com",
  projectId: "critixo",
  storageBucket: "critixo.firebasestorage.app",
  messagingSenderId: "750008201148",
  appId: "1:750008201148:web:cbffceb231c533005845b9",
  measurementId: "G-T8B3GDTGJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Mobile support ke liye extra functions export kiye
export { signInWithPopup, signInWithRedirect, getRedirectResult };
