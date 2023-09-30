import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYEF7T-EG92zRP8lM9fVUbMdKqJrA5Teg",
  authDomain: "goal-931ea.firebaseapp.com",
  databaseURL: "https://goal-931ea-default-rtdb.firebaseio.com",
  projectId: "goal-931ea",
  storageBucket: "goal-931ea.appspot.com",
  messagingSenderId: "736222726990",
  appId: "1:736222726990:web:eedf765701d9da3dbc2c1f"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
