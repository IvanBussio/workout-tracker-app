import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDijisSiDtKZuT2sq37ayNDDpnd0dFSnhc",
  authDomain: "workout-tracker-e438e.firebaseapp.com",
  projectId: "workout-tracker-e438e",
  storageBucket: "workout-tracker-e438e.firebasestorage.app",
  messagingSenderId: "69653636094",
  appId: "1:69653636094:web:8ef750b118e6576043d6af",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);