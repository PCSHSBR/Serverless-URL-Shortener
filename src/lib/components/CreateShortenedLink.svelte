<script lang="ts">
	import { fade } from 'svelte/transition';
	export let showAdvance = false;
	import { userStore } from 'sveltefire';
	import { auth } from '$lib/client/firebase';
	import { DEFAULT_DOMAIN, availableDomain, createLink } from '$lib/client/dynamic-link';
	import Icon from '@iconify/svelte';
	import CreateOptionTile from './CreateOptionTile.svelte';
	import ShortedLink from './ShortenLink/ShortedLink.svelte';
	const user = userStore(auth);
	let link = '';
	let linkCreateError: string[] = [];
	let successShortLinkResult: Awaited<ReturnType<typeof createLink>>;

	let userInput = {
		domain: DEFAULT_DOMAIN,
		customLink: '',
		linkOption: 'normal'
	};

	$: expandAdvance = !!link || userInput.linkOption !== 'normal';

	async function onSubmitNewLink() {
		linkCreateError = [];
		if (link.length === 0) {
			linkCreateError.push('กรุณากรอกลิงก์');
			return;
		}
		if (userInput.linkOption == 'custom' && userInput.customLink == '') {
			linkCreateError.push('กรุณากรอกลิงก์ที่ต้องการ');
			return;
		}
		const result = await createLink({
			link,
			customSlug: userInput.customLink == '' ? null : userInput.customLink,
			domain: userInput.domain,
			unguessable: userInput.linkOption === 'unguessable'
		});
		if (!result?.success) {
			console.log(result.error);
			if (result?.error?.issues?.lenght > 0) {
				linkCreateError.push(...result?.error.issues.map((issue) => issue.message));
			} else {
				linkCreateError.push(result?.error?.message || 'เกิดข้อผิดพลาดในการสร้างลิงก์');
			}
			linkCreateError = linkCreateError.filter((v, i, a) => a.indexOf(v) === i);
			return;
		}
		successShortLinkResult = result;
		userInput = {
			customLink: '',
			...userInput
		};
	}
</script>

<div class="my-4 group">
	<div class="">
		<div class="url-container cursor-pointer p-[0.01rem]" transition:fade|local={{ duration: 300 }}>
			<div class="flex bg-base-200 p-2 rounded-2xl">
				<button class="btn btn-primary" on:click|preventDefault={onSubmitNewLink}>ทำให้สั้น</button>
				<input
					type="text"
					bind:value={link}
					class="w-full bg-transparent mx-4 border-none outline-none"
					placeholder="ลิงก์"
					on:focus|preventDefault={() => {
						showAdvance = true;
					}}
				/>
			</div>
			{#if linkCreateError.length > 0}
				<div
					class="text-xs text-error alert border-0 flex gap-2 items-start p-[0.4rem] mt-[0.1rem]"
				>
					<Icon icon="mdi:alert-circle" class="h-4 w-4" />
					<ul class="list-inside text-left">
						{#each linkCreateError as em}
							<li>
								{em}
							</li>
						{/each}
					</ul>
				</div>
			{/if}
			{#if showAdvance}
				<div
					class="overflow-hidden rounded-2xl transition-[max-height,margin] duration-200 bg-base-200
				{expandAdvance
						? 'max-h-[700px] mt-0.5'
						: 'max-h-0 group-focus-within:max-h-[700px] group-focus-within:mt-0.5'}
				"
				>
					<div class="p-4 mt-3">
						<h3>ตัวเลือกลิงก์</h3>
						<div class="form-control space-y-2 my-2">
							<CreateOptionTile type="normal" bind:userInput>
								<h3>ปกติ</h3>
								<p class="label-text">สร้างลิงก์ตามค่าปริยาย</p>
							</CreateOptionTile>
							<CreateOptionTile type="unguessable" bind:userInput>
								<h3>สร้างลิงก์ให้ไม่สามารถคาดเดาได้</h3>
								<p class="label-text">
									เลือกตัวเลือกนี้หากไม่ต้องการให้ลิงก์ถูกเข้าถึงโดยการเรียงลำดับ
								</p>
							</CreateOptionTile>
							<!-- <CreateOptionTile type="custom" bind:userInput>
								<h3>ปรับแต่งลิงก์เอง</h3>
								<p class="label-text">เลือกว่าจะให้ลิงก์เป็นข้อความว่าอะไร</p>
							</CreateOptionTile> -->
						</div>
						{#if userInput.linkOption == 'custom'}
							<h3>ปรับแต่งลิงก์เอง</h3>
							<div class="form-control">
								<label class="label" for="custom_link">
									<span class="label-text">สร้างลิงก์โดยใช้ข้อความที่คุณต้องการ</span>
								</label>
								<div
									class="join join-horizontal overflow-x-auto overflow-y-hidden py-2"
									id="custom_link"
								>
									<span class="join-item input input-sm input-disabled">https://</span>
									<select
										name="domain"
										id="domain"
										class="join-item select select-sm"
										bind:value={userInput.domain}
									>
										{#each availableDomain as d}
											<option value={d}>{d}</option>
										{/each}
									</select>
									<span class="join-item input input-sm input-disabled">/</span>
									<div class="flex flex-row join-item input input-sm p-0">
										<input
											bind:value={userInput.customLink}
											type="text"
											maxlength="32"
											minlength="3"
											pattern="[a-zA-Z0-9\-\_]+"
											class="bg-transparent invalid:bg-error invalid:text-error-content w-36 input input-sm outline-none rounded-none"
											placeholder="smt2023"
										/>
										<span class="w-10 text-center input input-sm rounded-none rounded-e-lg">
											{userInput.customLink.length}</span
										>
									</div>
								</div>
								<span class="label">
									<span class="label-text-alt"
										>หมายเหตุ: ลิงก์ที่กำหนดเองจะสามารถใช้ได้เฉพาะตัวอักษร a-z, A-Z, 0-9,
										เครื่องหมายขีดลบ (<code>-</code>), และอันเดอร์สกอร์ (<code>_</code>) เท่านั้น
										และยาวไม่เกิน 32 ตัวอักษร และไม่น้อยกว่า 3 ตัวอักษร ห้ามมีคำหยาบหรือไม่เหมาะสม</span
									>
								</span>
							</div>
						{/if}
					</div>
				</div>
			{/if}
			<div
				class="overflow-hidden rounded-2xl transition-[max-height,margin] duration-200 bg-base-200
			{successShortLinkResult ? 'max-h-[700px] mt-0.5' : 'max-h-0'}
			"
			>
				{#if successShortLinkResult}
					<h3 class="text-2xl mt-3 ml-3 font-bold">
						<span class="text-bold text-primary">สร้างลิงก์</span>เรียบร้อย 🎉
					</h3>
					<ShortedLink
						link={successShortLinkResult.shortLink}
						originalLink={successShortLinkResult.longLink}
					/>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.url-container {
		@apply relative rounded-2xl transition-all duration-100;

		&:focus-within {
			@apply shadow-lg;

			&::before {
				@apply blur-sm;
			}
		}

		&::before {
			border-radius: 1.1rem;
			transition: all ease 0.5s transition-all duration-100;
			position: absolute;
			top: -0.1rem;
			left: -0.12rem;
			right: -0.12rem;
			bottom: -0.12rem;
			background: linear-gradient(
				90deg,
				hsl(var(--p)),
				transparent,
				transparent,
				transparent,
				transparent,
				hsl(var(--p))
			);
			content: '';
			z-index: -1;
		}
	}
</style>
