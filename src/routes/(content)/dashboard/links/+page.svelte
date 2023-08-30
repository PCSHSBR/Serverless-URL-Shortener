<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { Collection, SignedIn, SignedOut, userStore } from 'sveltefire';
	import { auth, signIn } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import ShortedLink from '$lib/components/ShortenLink/ShortedLink.svelte';
	import QrCanvas from '$lib/components/QrCanvas.svelte';
	import CreateShortenedLink from '$lib/components/CreateShortenedLink.svelte';
	const user = userStore(auth);

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

		<div class="form-control gap-2 bg-base-200 p-4 mb-4 rounded-xl">
			<div class="input-group shadow-md">
				<input type="text" placeholder="ค้นหา" class="w-full input input-bordered" />
				<button class="btn btn-square">
					<Icon icon="mdi:magnify" />
				</button>
				<button class="btn btn-square">
					<Icon icon="mdi:filter" />
				</button>
			</div>
			<div class=" input-group w-auto md:mx-0 mx-auto">
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
		</div>
		<div class="bg-base-200 p-4 space-y-4 rounded-xl divide-y-2 divide-base-100">
			<ShortedLink link="https://youtu.be/Yk8jV7r6VMk" />
			<ShortedLink link="https://youtu.be/gOgpdp3lP8M" />
			<ShortedLink link="https://youtu.be/gOgpdp3lP8M" />
			<ShortedLink />
			<ShortedLink />
			<ShortedLink />
		</div>
	</SignedIn>
</section>
