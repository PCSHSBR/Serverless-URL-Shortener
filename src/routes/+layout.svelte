<script>
	import '../app.scss';
	import '../app.postcss';
	import '@fontsource-variable/anuphan';
	import { FirebaseApp } from 'sveltefire';
	import { initializeApp } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { app } from '$lib/client/firebase';
	import { getStorage } from 'firebase/storage';
	import Icon100x100 from '$lib/assets/Icon100x100.png';
	const firestore = getFirestore(app);
	const auth = getAuth(app);
	const storage = getStorage(app);
</script>

<FirebaseApp {auth} {firestore} {storage}>
	<main>
		<slot />
	</main>
</FirebaseApp>
