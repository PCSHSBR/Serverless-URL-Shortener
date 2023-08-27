<script lang="ts">
	import Icon from '@iconify/svelte';
	import { SignedIn, SignedOut } from 'sveltefire';
	import { slide } from 'svelte/transition';
	import { signIn } from '$lib/firebase';
	import { redirect } from '@sveltejs/kit';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Logo from '$lib/assets/Icon.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	let menuState = false;
	function toggleMenu() {
		if (dev) console.log('toggle');
		fixMenu();
		menuState = !menuState;
	}
	function fixMenu() {
		if (menuState) {
			document.body.style.overflow = 'auto';
		} else {
			document.body.style.overflow = 'hidden';
		}
	}
</script>

{#if menuState}
	<div
		class="md:hidden block z-40 fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-base-200/90 backdrop-blur-lg"
		transition:slide|local={{ duration: 500 }}
	>
		<ul class="mt-16 menu menu-vertical w-full gap-2 px-1">
			<li>
				<a href="/" on:click={toggleMenu}><Icon icon="mdi:home" />หน้าแรก</a>
			</li>
			<li>
				<a href="/" on:click={toggleMenu}><Icon icon="mdi:about" />เกี่ยวกับ</a>
			</li>
		</ul>
	</div>
{/if}

<nav class="navbar sticky top-0 z-50 {$page.url.pathname.match('/dashboard') ? 'bg-base-200' : ''}">
	<label class="md:hidden grid btn btn-ghost swap swap-rotate">
		<input type="checkbox" bind:checked={menuState} on:click={fixMenu} />
		<Icon class="text-xl swap-on fill-current" icon="mdi:close" />
		<Icon class="text-xl swap-off fill-current" icon="mdi:menu" />
	</label>
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl"
			><Logo class="w-10 h-10 drop-shadow-md text-primary" /><span class="md:block hidden"
				>PCSHSBR <small>Short</small></span
			></a
		>
	</div>
	<div class="flex-none">
		<ul class="md:inline-flex hidden menu menu-horizontal px-1">
			<li><a href="/"><Icon icon="mdi:home" />หน้าแรก</a></li>
			<li><a href="/"><Icon icon="mdi:about" />เกี่ยวกับ</a></li>
		</ul>
		<SignedOut let:auth>
			<a href="/login"
				><button class="btn btn-primary"><Icon icon="mdi:login" />เข้าสู่ระบบ</button></a
			>
		</SignedOut>
		<SignedIn let:user let:signOut>
			<a href="/dashboard"
				><button class="btn btn-primary"
					><Icon icon="material-symbols:dashboard" on:click={fixMenu} />แดชบอร์ด</button
				></a
			>
		</SignedIn>
	</div>
</nav>
