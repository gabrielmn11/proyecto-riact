import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "proyecto-riact.firebaseapp.com",
  projectId: "proyecto-riact",
  storageBucket: "proyecto-riact.appspot.com",
  messagingSenderId: "556291224404",
  appId: "1:556291224404:web:b9d340eb20790377294ec1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);