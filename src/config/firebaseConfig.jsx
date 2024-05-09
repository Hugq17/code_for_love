// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEXvreSetf2oeCMbAiuqS2i3Fdq0Q6Ibc",
  authDomain: "notificationsharingcoffee.firebaseapp.com",
  projectId: "notificationsharingcoffee",
  storageBucket: "notificationsharingcoffee.appspot.com",
  messagingSenderId: "282862147983",
  appId: "1:282862147983:web:93ab2d0dccdc487eb193fa",
  measurementId: "G-PSHW9VNHVE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
