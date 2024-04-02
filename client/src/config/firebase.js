// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXe2d969pcDhV72npt_oFyAS60vIl_kL0",
  authDomain: "agrisense-9b3ea.firebaseapp.com",
  projectId: "agrisense-9b3ea",
  storageBucket: "agrisense-9b3ea.appspot.com",
  messagingSenderId: "626282813113",
  appId: "1:626282813113:web:305622f0eb8588e68a2d68",
  databaseURL: "https://agrisense-9b3ea-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);