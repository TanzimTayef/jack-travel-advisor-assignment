import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoV2Vogd4JBt7s9kXdRfVAw4zty56i_NQ",
  authDomain: "jack-travel-advisor.firebaseapp.com",
  projectId: "jack-travel-advisor",
  storageBucket: "jack-travel-advisor.appspot.com",
  messagingSenderId: "240579979676",
  appId: "1:240579979676:web:ef00f91b00176acbd18059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// export auth
export default auth;