// src/firebase/firebaseconfig.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2NiryFtHhOcTCjxblDeF8VsyXZkl3CO0",
  projectId: "volleytrack-19f95",
  storageBucket: "volleytrack-19f95.firebasestorage.app",
  appId: "1:189272901921:android:531acd6bd3bef150649660",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
