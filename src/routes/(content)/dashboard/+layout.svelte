<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Collection, SignedIn, SignedOut, userStore } from 'sveltefire';
	import { auth, signIn } from '$lib/firebase';
	import { goto } from '$app/navigation';
	const user = userStore(auth);
	onMount(async () => {
		if (!$user) {
			goto(`/login?redirect=${$page.url.pathname}`);
		}
	});
</script>

<div class="relative hidden md:flex flex-row">
	<nav class="bg-base-200">
		<ul class="flex flex-col">
			<a href="/dashboard"
				><button
					class="btn btn-lg {$page.url.pathname === '/dashboard' ? 'btn-primary' : 'btn-ghost'}"
					><Icon icon="mdi:home" /></button
				></a
			>
			<a href="/dashboard/links"
				><button
					class="btn btn-lg {$page.url.pathname === '/dashboard/links'
						? 'btn-primary'
						: 'btn-ghost'}"><Icon icon="mdi:link" /></button
				></a
			>
			<a href="/dashboard/account"
				><button
					class="btn btn-lg {$page.url.pathname === '/dashboard/account'
						? 'btn-primary'
						: 'btn-ghost'}"><Icon icon="mdi:account" /></button
				></a
			>
			<a href="/dashboard/adminpanel"
				><button
					class="btn btn-lg {$page.url.pathname === '/dashboard/adminpanel'
						? 'btn-primary'
						: 'btn-ghost'}"><Icon icon="ic:round-admin-panel-settings" /></button
				></a
			>
		</ul>
	</nav>
	<div class="w-full h-[calc(100vh-68px)] overflow-auto">
		<slot />
	</div>
</div>
<div class="block md:hidden">
	<slot />
	<div class="p-10" />
	<div class="btm-nav bg-base-200 shadow-lg mt-10">
		<a href="/dashboard"
			><button
				class="btn w-full btn-lg {$page.url.pathname === '/dashboard'
					? 'btn-primary'
					: 'btn-ghost'}"><Icon icon="mdi:home" /></button
			></a
		>
		<a href="/dashboard/links"
			><button
				class="btn w-full btn-lg {$page.url.pathname === '/dashboard/links'
					? 'btn-primary'
					: 'btn-ghost'}"><Icon icon="mdi:link" /></button
			></a
		>
		<a href="/dashboard/account"
			><button
				class="btn w-full btn-lg {$page.url.pathname === '/dashboard/account'
					? 'btn-primary'
					: 'btn-ghost'}"><Icon icon="mdi:account" /></button
			></a
		>
		<a href="/dashboard/adminpanel"
			><button
				class="btn w-full btn-lg {$page.url.pathname === '/dashboard/adminpanel'
					? 'btn-primary'
					: 'btn-ghost'}"><Icon icon="ic:round-admin-panel-settings" /></button
			></a
		>
	</div>
</div>
