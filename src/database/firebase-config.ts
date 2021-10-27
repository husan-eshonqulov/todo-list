import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjyM6o_LbWZxMaqG-JGgOeH2m33H5qPiA",
  authDomain: "todo-list-1b3c7.firebaseapp.com",
  projectId: "todo-list-1b3c7",
  storageBucket: "todo-list-1b3c7.appspot.com",
  messagingSenderId: "771085291466",
  appId: "1:771085291466:web:94357a8b61939eb7ef0933",
  measurementId: "G-VFQHRDHH0X",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
