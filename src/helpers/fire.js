import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVNGMV6DdA68R1_bK5plIb_iOctapOupY",
  authDomain: "hellouni-29903.firebaseapp.com",
  projectId: "hellouni-29903",
  storageBucket: "hellouni-29903.firebasestorage.app",
  messagingSenderId: "383211932740",
  appId: "1:383211932740:web:6a7688cfcac24cf2c70011",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
