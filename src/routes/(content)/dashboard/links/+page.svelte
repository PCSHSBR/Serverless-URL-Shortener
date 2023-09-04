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
	<title>ลิงก์ทั้งหมด - แดชบอร์ด - PCSHSBR Short</title>
</svelte:head>

<section class="md:px-8 px-4 m-auto mx-auto mt-8">
	<SignedIn>
		<h1 class="text-6xl leading-snug">
			<span class="font-extrabold text-primary">ลิงก์</span>ทั้งหมด
		</h1>
		<CreateShortenedLink showAdvance />

		<!-- <div class="form-control gap-2 bg-base-200 p-4 mb-4 rounded-xl">
			<div class="input-group shadow-md">
				<input type="text" placeholder="ค้นหา" class="w-full input input-bordered" />
				<button class="btn btn-square">
					<Icon icon="mdi:magnify" />
				</button>
				<button class="btn btn-square">
					<Icon icon="mdi:filter" />
				</button>
			</div>
			<div class="input-group w-auto md:mx-0 mx-auto">
				<button class="btn bg-base-100"> 1 </button>
				<button class="btn bg-base-100">
					<Icon icon="mdi:arrow-left" />
				</button>
				<button class="btn bg-base-100"> 1/40 </button>
				<button class="btn bg-base-100">
					<Icon icon="mdi:arrow-right" />
				</button>
				<button class="btn bg-base-100"> 40 </button>
			</div>
		</div> -->
		<div class="bg-base-200 p-4 space-y-4 rounded-xl divide-y-2 divide-base-100">
			{#each $links as link}
				<ShortedLink link={link.shortLink} originalLink={link.longLink} />
			{/each}
		</div>
	</SignedIn>
</section>
