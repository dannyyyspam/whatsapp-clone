import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKPWyKQuqo5vi_C1OnX_V7575JkYnFEXc",
  authDomain: "whatsapp-clone-372901.firebaseapp.com",
  projectId: "whatsapp-clone-372901",
  storageBucket: "whatsapp-clone-372901.appspot.com",
  messagingSenderId: "258589879405",
  appId: "1:258589879405:web:aaa1ba70189874c7cde364",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
