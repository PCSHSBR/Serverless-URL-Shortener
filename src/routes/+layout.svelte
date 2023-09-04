<script>
	import '../app.scss';
	import '../app.postcss';
	import '@fontsource-variable/anuphan';
	import { FirebaseApp } from 'sveltefire';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { app } from '$lib/client/firebase';
	import { getStorage } from 'firebase/storage';
	const firestore = getFirestore(app);
	const auth = getAuth(app);
	const storage = getStorage(app);
</script>

<FirebaseApp {auth} {firestore} {storage}>
	<main>
		<slot />
	</main>
</FirebaseApp>
