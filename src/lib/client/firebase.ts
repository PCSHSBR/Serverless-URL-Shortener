import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { type Auth, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyB5S2P8TcnzYlYfrz7SEExuVz1TEMBuBXk',
	authDomain: 'pcshsbr-space.firebaseapp.com',
	projectId: 'pcshsbr-space',
	storageBucket: 'pcshsbr-space.appspot.com',
	messagingSenderId: '430296940905',
	appId: '1:430296940905:web:78f1ae2dc70dc57857bdf8',
	measurementId: 'G-H9H875L22X'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export function isSignedIn(auth: Auth) {
	return auth.currentUser !== null;
}

export async function signIn(auth: Auth) {
	const provider = new GoogleAuthProvider();
	await signInWithPopup(auth, provider).then(async (result) => { 
		await setDoc(doc(db, 'users', result.user.uid), {
			name: result.user.displayName,
			email: result.user.email,
			photoURL: result.user.photoURL,
			uid: result.user.uid
		})
	})
}

export async function signOut(auth: Auth) {
	await auth.signOut();
}
