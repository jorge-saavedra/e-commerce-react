// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB0Tb8mvNOcFD8MXdblG8sG7859e0r_ik",
  authDomain: "remerjs-ecommetce.firebaseapp.com",
  projectId: "remerjs-ecommetce",
  storageBucket: "remerjs-ecommetce.appspot.com",
  messagingSenderId: "955933421175",
  appId: "1:955933421175:web:a8cc593fc5f2604f68a072",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
