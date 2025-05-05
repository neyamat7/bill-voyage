import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtP0PAMU6KWvL9jRfqpnqMjeUzpmA3bEM",
  authDomain: "authentication-demo-6a446.firebaseapp.com",
  projectId: "authentication-demo-6a446",
  storageBucket: "authentication-demo-6a446.firebasestorage.app",
  messagingSenderId: "86290035858",
  appId: "1:86290035858:web:6ffe6ee3861e60dde5e24b",
  measurementId: "G-RH5Q67WFB8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
