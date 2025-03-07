// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCspiMBeyGcsLPzKuTBa2PF1NGy8_F1O4k",
    authDomain: "imagelittleroom.firebaseapp.com",
    projectId: "imagelittleroom",
    storageBucket: "imagelittleroom.appspot.com",
    messagingSenderId: "345040866229",
    appId: "1:345040866229:web:59d22184552771459ae7fc",
    measurementId: "G-9S0LXFHVYF"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
