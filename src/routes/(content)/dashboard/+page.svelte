<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { Collection, SignedIn, SignedOut, userStore } from 'sveltefire';
	import { auth, signIn } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import Chart from '$lib/components/Chart.svelte';
	import ShortedLink from '$lib/components/ShortenLink/ShortedLink.svelte';
</script>

<svelte:head>
	<title>แดชบอร์ด - PCSHSBR Short</title>
</svelte:head>

<section class="md:px-8 px-4 m-auto mx-auto mt-8">
	<h1 class="text-6xl leading-snug">
		<span class="font-extrabold text-primary">แดช</span>บอร์ด
	</h1>
	<div class="space-y-4">
		<SignedIn let:auth>
			<p>
				ยินดีต้อนรับ <b>{auth.currentUser?.displayName}</b>
			</p>
			<a href="/dashboard/account"
				><button class="btn btn-primary"><Icon icon="mdi:account" />จัดการบัญชี</button></a
			>
			<div class="grid md:grid-cols-2 grid-cols-1 gap-4">
				<div class=" bg-base-200 w-full p-5 rounded-xl">
					<h2 class="text-xl">ยอดการดู</h2>
					<div class="inline-flex items-end">
						<span class="text-3xl font-bold">2.5 พัน</span><span class="pl-2 inline-flex"
							><Icon class="pr-2 text-2xl" icon="material-symbols:arrow-outward" />10%
							จากอาทิทย์ที่แล้ว</span
						>
					</div>
					<Chart />
				</div>
				<div class=" bg-base-200 w-full p-5 rounded-xl">
					<h2 class="text-xl">ลิงก์ทั้งหมด</h2>
					<div class="inline-flex items-end">
						<span class="text-3xl font-bold">480</span>
					</div>
					<Chart />
				</div>
			</div>
		</SignedIn>
		<SignedOut let:auth>
			<p>คุณยังไม่ได้เข้าสู่ระบบ โปรดเข้าสู่ระบบ</p>
			<button
				class="btn btn-sm btn-primary"
				on:click={async () => {
					await goto('/login');
				}}>เข้าสู่ระบบ</button
			>
		</SignedOut>
	</div>
</section>
