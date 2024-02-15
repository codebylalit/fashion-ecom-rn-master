// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL1YZXPF5kGplngjpkIQJfQjze5I-AdSs",
  authDomain: "lucky-fashion-90fa1.firebaseapp.com",
  projectId: "lucky-fashion-90fa1",
  storageBucket: "gs://lucky-fashion-90fa1.appspot.com",
  messagingSenderId: "725701763080",
  appId: "1:5333753610:web:81fdfb2f0c3df46439a4f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}