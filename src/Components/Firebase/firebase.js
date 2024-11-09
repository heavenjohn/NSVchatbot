// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Correct import for GoogleAuthProvider

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-6fintAaUyUUWFBqnZmfsNwwnIV3x88c",
    authDomain: "nvschatbot.firebaseapp.com",
    databaseURL: "https://nvschatbot-default-rtdb.firebaseio.com",
    projectId: "nvschatbot",
    storageBucket: "nvschatbot.firebasestorage.app",
    messagingSenderId: "316590867227",
    appId: "1:316590867227:web:60d5804a62667245d809be",
    measurementId: "G-P9VTN89XR5"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider

// Export the necessary services
export { analytics, app, storage, auth, db, googleProvider };
