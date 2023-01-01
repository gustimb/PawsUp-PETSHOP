
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwpFVFwqHdNS6pYGp05ZVPwO8t1CKksOc",
  authDomain: "pawsup-17d73.firebaseapp.com",
  projectId: "pawsup-17d73",
  storageBucket: "pawsup-17d73.appspot.com",
  messagingSenderId: "705203858035",
  appId: "1:705203858035:web:91baf44f07680e2f651806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);