import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
console.log(process.env.API_KEY)
console.log(process.env.AUTH_DOMAIN)
console.log(process.env.PROYECT_ID)
console.log(process.env.STORAGE_BUCKET)
console.log(process.env.MESSAGING_SENDER_ID)
console.log(process.env.APP_ID)
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROYECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)