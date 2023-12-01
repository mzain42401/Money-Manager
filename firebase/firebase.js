import { initializeApp } from "firebase/app";
 import {getAuth} from 'firebase/auth'
 
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCHBDrUzAvst_yI8WebVeBRNwW2ym9JFZc",
  authDomain: "moneymanager-cf547.firebaseapp.com",
  projectId: "moneymanager-cf547",
  storageBucket: "moneymanager-cf547.appspot.com",
  messagingSenderId: "494858463035",
  appId: "1:494858463035:web:81beee4b22d908a37b391e",
  measurementId: "G-F93YX7YTXN"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const store=getFirestore(app)
export const storage=getStorage(app)

