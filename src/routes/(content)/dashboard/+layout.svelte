<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Collection, SignedIn, SignedOut, userStore } from 'sveltefire';
	import { auth, signIn } from '$lib/client/firebase';
	import { goto } from '$app/navigation';
	const user = userStore(auth);
	onMount(async () => {
		if (!$user) {
			goto(`/login?redirect=${$page.url.pathname}`);
		}
	});
</script>

<nav class="bg-base-200 fixed left-0 top-0 bottom-0 hidden md:flex flex-row mt-[4.25rem] rounded-t">
	<ul class="flex flex-col">
		<a href="/dashboard"
			><button
				class="btn btn-lg {$page.url.pathname === '/dashboard' ? 'btn-primary' : 'btn-ghost'}"
				><Icon icon="mdi:home" /></button
			></a
		>
		<a href="/dashboard/links"
			><button
				class="btn btn-lg {$page.url.pathname === '/dashboard/links' ? 'btn-primary' : 'btn-ghost'}"
				><Icon icon="mdi:link" /></button
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
<div class="pb-20 md:pb-0 md:pl-16">
	<slot />
</div>
<nav class="block md:hidden">
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
</nav>
