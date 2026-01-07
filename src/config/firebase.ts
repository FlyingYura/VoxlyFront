import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCD8HCwTLrdtlemVcZOk40mP0ZM5f3n-6o",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "voxly-f2531.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "voxly-f2531",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "voxly-f2531.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "712059317144",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:712059317144:web:7af8b781764fc08c1a59ed",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-2CX780RFKV",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default app;

