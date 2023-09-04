<script lang="ts">
	import { fade } from 'svelte/transition';
	export let showAdvance = false;
	import { userStore } from 'sveltefire';
	import { auth } from '$lib/client/firebase';
	import { createLink } from '$lib/client/dynamic-link';
	import Icon from '@iconify/svelte';
	const user = userStore(auth);
	let link = '';
	let linkCreateError: string[] = [];

	let successShortLink: string | undefined = '';

	async function onSubmitNewLink() {
		linkCreateError = [];
		if (link.length === 0) {
			linkCreateError.push('กรุณากรอกลิงก์');
			return;
		}
		const result = await createLink({
			link,
			domain: 'pcshsbr.page.link'
		});
		if (result?.error) {
			linkCreateError.push(...result?.error.issues.map((issue) => issue.message));
			linkCreateError = linkCreateError.filter((v, i, a) => a.indexOf(v) === i);
			return;
		}
		successShortLink = result?.shortLink;
	}
</script>

<div>
	<div
		class="url-container cursor-pointer bg-base-200 p-2 my-4 flex"
		transition:fade|local={{ duration: 300 }}
	>
		<button class="btn btn-primary" on:click|preventDefault={onSubmitNewLink}>ทำให้สั้น</button>
		<input
			type="text"
			bind:value={link}
			class="w-full bg-transparent mx-4 border-none outline-none"
			placeholder="ลิงก์"
		/>
	</div>
	{#if linkCreateError.length > 0}
		<div class="text-xs text-error alert my-3">
			<Icon icon="mdi:alert-circle" class="h-6 w-6" />
			<ul class="list-disc list-inside">
				{#each linkCreateError as em}
					<li>
						{em}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
	{#if showAdvance}
		<!-- TODO: add advance option here -->
		<!-- <div class="collapse collapse-arrow p-0 bg-black">
			<input type="checkbox" class="" />
			<div class="collapse-title m-0 p-2 after:top-1">ขั้นสูง</div>
			<div class="collapse-content text-xs">รายการขั้นสูง</div>
		</div> -->
	{/if}
</div>
