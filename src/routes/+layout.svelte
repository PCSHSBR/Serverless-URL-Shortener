<script>
	import '../app.scss';
	import '../app.postcss';
	import '@fontsource-variable/anuphan';
	import { FirebaseApp } from 'sveltefire';
	import { initializeApp } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth } from 'firebase/auth';
	import { app } from '$lib/firebase';
	const firestore = getFirestore(app);
	const auth = getAuth(app);
</script>

<FirebaseApp {auth} {firestore}>
	<main>
		<slot />
	</main>
</FirebaseApp>
