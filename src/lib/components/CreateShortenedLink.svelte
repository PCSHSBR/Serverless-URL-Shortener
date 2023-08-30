<script lang="ts">
	import { fade } from 'svelte/transition';
	export let showAdvance = false;
	import { userStore } from 'sveltefire';
	import { auth } from '$lib/firebase';
	import { isURL } from '$lib/utils';
	import type { User } from 'firebase/auth';
	import { DEFAULT_DOMAIN, availableDomain } from '$lib/dynamic-link';
	import { z } from 'zod';
	const user = userStore(auth);

	const createLinkSchema = z.object({
		link: z.string().url(),
		domain: z
			.string()
			.default(DEFAULT_DOMAIN)
			.refine((value) => {
				if (value) {
					return availableDomain.includes(value);
				}
				return true;
			}, 'Invalid domain')
			.optional(),
		customSlug: z.string().optional(),
		random: z.boolean().optional().default(false),
		user: z
			.object({
				uid: z.string(),
				displayName: z.string().nullable().optional(),
				email: z.string().email().nullable(),
				photoURL: z.string().url().nullable(),
				emailVerified: z.boolean(),
				phoneNumber: z.string().nullable().optional(),
				isAnonymous: z.boolean(),
				tenantId: z.string().nullable().optional(),
				providerData: z.array(
					z.object({
						uid: z.string(),
						displayName: z.string().nullable(),
						email: z.string().email().nullable(),
						photoURL: z.string().url().nullable(),
						providerId: z.string()
					})
				)
			})
			.nullable()
	});

	type CreateLinkOptions = z.infer<typeof createLinkSchema>;

	async function createShortenedLink(options: CreateLinkOptions) {
		const parsedData = createLinkSchema.parse(options);
		const { link, domain, customSlug, random, user: __user } = parsedData;
		console.log({
			link,
			domain,
			customSlug,
			random,
			user: __user
		});
	}

	let link = '';
</script>

<div>
	<div
		class="url-container cursor-pointer bg-base-200 p-2 my-4 flex"
		transition:fade|local={{ duration: 300 }}
	>
		<button
			class="btn btn-primary"
			on:click|preventDefault={async () => {
				await createShortenedLink({
					link,
					user: $user
				}).catch(console.error);
			}}>ทำให้สั้น</button
		>
		<input
			type="text"
			bind:value={link}
			class="w-full bg-transparent mx-4 border-none outline-none"
			placeholder="ลิงก์"
		/>
	</div>
	{#if showAdvance}
		<!-- TODO: add advance option here -->
		<!-- <div class="collapse collapse-arrow p-0 bg-black">
			<input type="checkbox" class="" />
			<div class="collapse-title m-0 p-2 after:top-1">ขั้นสูง</div>
			<div class="collapse-content text-xs">รายการขั้นสูง</div>
		</div> -->
	{/if}
</div>
