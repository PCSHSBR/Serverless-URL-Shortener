<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { Collection, SignedIn, SignedOut, userStore } from 'sveltefire';
	import { auth, signIn } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import ShortedLink from '$lib/components/ShortedLink.svelte';
	const user = userStore(auth);

	onMount(async () => {
		if (!$user) {
			goto('/login');
		}
	});
</script>

<svelte:head>
	<title>แดชบอร์ด/ลิ้งก์ทั้งหมด - PCSHSBR Short</title>
</svelte:head>

<section class="px-8 m-auto mx-auto mt-10">
	<SignedIn>
		<h1 class="text-6xl leading-snug">
			<span class="font-extrabold text-primary">ลิงก์</span> ทั้งหมด
		</h1>
		<div
			class="url-container cursor-pointer bg-base-200 p-2 my-4 flex"
			transition:fade|local={{ duration: 300 }}
		>
			<button class="btn btn-primary" on:click|preventDefault={() => {}}>ทำให้สั้น</button>
			<input
				type="text"
				class="w-full bg-transparent mx-4 border-none outline-none"
				placeholder="ลิงก์"
			/>
		</div>
		<div class="space-y-4">
			<ShortedLink />
			<ShortedLink />
			<ShortedLink />
			<ShortedLink />
		</div>
	</SignedIn>
</section>
<section class="px-8 py-12 max-w-5xl m-auto">
	UID: {$user?.uid}
	<Collection ref="links/{$user?.uid}/createdLinks" let:data let:count>
		{#each data as link}
			<pre>{JSON.stringify(link, null, 2)}</pre>
		{/each}
	</Collection>
</section>
