// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAybYkB4RNUMuqFyvmiZ8ZMHqO3AwvaHM4",
    authDomain: "lms-app-3aa1e.firebaseapp.com",
    projectId: "lms-app-3aa1e",
    storageBucket: "lms-app-3aa1e.appspot.com",
    messagingSenderId: "900641599654",
    appId: "1:900641599654:web:efe6b3a93cf2531870c467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;