// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs3iD2ZknRLQaaePkxG4vLXNWA0uu_D34",
  authDomain: "hoop-270a5.firebaseapp.com",
  databaseURL: "https://hoop-270a5-default-rtdb.firebaseio.com",
  projectId: "hoop-270a5",
  storageBucket: "hoop-270a5.appspot.com",
  messagingSenderId: "234848407382",
  appId: "1:234848407382:web:51b88e9d05946250ced0f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app); // Firestore initialization

// Export auth and db
export { auth, db };
