<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { Collection, SignedIn, SignedOut, collectionStore, userStore } from 'sveltefire';
	import { auth, signIn } from '$lib/client/firebase';
	import { goto } from '$app/navigation';
	import ShortedLink from '$lib/components/ShortenLink/ShortedLink.svelte';
	import QrCanvas from '$lib/components/QrCanvas.svelte';
	import CreateShortenedLink from '$lib/components/CreateShortenedLink.svelte';
	import { app, db } from '$lib/client/firebase';
	import { Query, collection, orderBy, query, where } from 'firebase/firestore';
	import type { Link } from '$lib/client/dynamic-link';
	import CreateAndShowHistory from '$lib/components/CreateAndShowHistory.svelte';

	const user = userStore(auth);
	const linksRef = collection(db, 'links');
	$: q = query(
		linksRef,
		where('createBy', '==', $user?.uid || ''),
		orderBy('createAt', 'desc')
	) as Query<Link>;
	$: links = collectionStore<Link>(db, q);

	onMount(async () => {
		if (!$user) {
			goto('/login');
		}
	});
</script>

<svelte:head>
	<title>All links - Dashboard - PCSHSBR Short</title>
</svelte:head>

<section class="md:px-8 px-4 m-auto mx-auto mt-8">
	<SignedIn>
		<h1 class="text-6xl leading-snug">
			<span class="font-extrabold text-primary">All</span> links
		</h1>
		<CreateAndShowHistory />
	</SignedIn>
</section>
