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
	<title>แดชบอร์ด/บัญชี - PCSHSBR Short</title>
</svelte:head>

<section class="md:px-8 px-4 m-auto mx-auto mt-8">
	<h1 class="text-6xl leading-snug">
		จัดการ<span class="font-extrabold text-primary">บัญชี</span>
	</h1>
	<div>
		<SignedIn let:auth>
			<p class="whitespace-pre-line">
				ยินดีต้อนรับ <b>{auth.currentUser?.displayName}</b>
				อีเมล: <b>{auth.currentUser?.email}</b>
			</p>
			<button
				class="btn btn-sm btn-error"
				on:click={async () => {
					await auth.signOut();
					if (!$user) {
						goto('/');
					}
				}}><Icon icon="mdi:logout" />ออกจากระบบ</button
			>
		</SignedIn>
		<SignedOut let:auth>
			<p>คุณยังไม่ดเข้าสู่ระบบโปรดเข้าสู่ระบบ</p>
			<button
				class="btn btn-sm btn-primary"
				on:click={async () => {
					await goto('/login');
				}}>เข้าสู่ระบบ</button
			>
		</SignedOut>
	</div>
	<small><code>UID: {$user?.uid}</code></small>
	<Collection ref="links/{$user?.uid}/createdLinks" let:data let:count>
		{#each data as link}
			<pre>{JSON.stringify(link, null, 2)}</pre>
		{/each}
	</Collection>
</section>
