import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBlD-5R2DbOeX_WyyPul7D6HispqlAg04",
  authDomain: "personalecommerce-d29f3.firebaseapp.com",
  projectId: "personalecommerce-d29f3",
  storageBucket: "personalecommerce-d29f3.appspot.com",
  messagingSenderId: "953964934750",
  appId: "1:953964934750:web:5196e1a966b53305e4e6cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)