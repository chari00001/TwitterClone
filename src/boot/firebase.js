import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDXL_1VJhA2nvPafYqUAQCMs7jQUBYMba8",
  authDomain: "qwitterproject.firebaseapp.com",
  projectId: "qwitterproject",
  storageBucket: "qwitterproject.appspot.com",
  messagingSenderId: "802751626927",
  appId: "1:802751626927:web:cce3100f2f1f5f61029e5a",
  measurementId: "G-PMN3RYNV55"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db