// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbj3ICip26MxEn36TSq57jcnbPIMCqmTs",
    authDomain: "cooking-toys-client.firebaseapp.com",
    projectId: "cooking-toys-client",
    storageBucket: "cooking-toys-client.appspot.com",
    messagingSenderId: "88298809646",
    appId: "1:88298809646:web:e3cc0af364240454ccf2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;