import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5S2P8TcnzYlYfrz7SEExuVz1TEMBuBXk",
  authDomain: "pcshsbr-space.firebaseapp.com",
  projectId: "pcshsbr-space",
  storageBucket: "pcshsbr-space.appspot.com",
  messagingSenderId: "430296940905",
  appId: "1:430296940905:web:78f1ae2dc70dc57857bdf8",
  measurementId: "G-H9H875L22X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export function signIn(auth: Auth) {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
}