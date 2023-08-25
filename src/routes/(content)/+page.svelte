<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import { SignedIn, SignedOut, userStore } from 'sveltefire';
	import { auth, signIn } from '$lib/firebase';

	const user = userStore(auth);
</script>

<section
	class="max-w-[calc(792px-24px)] w-[calc(100vw-64px)] mx-auto {$user
		? 'mt-10'
		: 'absolute top-1/2 -translate-y-1/2 right-0 left-0'}"
>
	<h1 class="text-6xl leading-snug">
		ทำให้ URL <span class="font-extrabold text-primary"> สั้นกว่าเดิม </span> ได้เลยตอนนี้
	</h1>
	<SignedIn>
		<div
			class="url-container cursor-pointer dark:bg-dark-base-50 bg-base-200 p-2 my-4 flex"
			in:fade
			out:fade
		>
			<button class="btn btn-primary" on:click|preventDefault={() => {}}>ทำให้สั้น</button>
			<input
				type="text"
				class="w-full bg-transparent mx-4 border-none outline-none"
				placeholder="ลิงก์"
			/>
		</div>
	</SignedIn>
		<div
			class="carousel carousel-center w-full px-1 py-4 space-x-4 bg-neutral rounded-box md:justify-center justify-start"
		>
			<div
				class="carousel-item feature-container-card sm:w-52 w-[calc(100%-28px)] box-content flex p-4 flex-col sm:items-center items-start h-64 rounded-2xl"
			>
				<Icon icon="mdi:fast-forward" class="text-6xl" />
				<h2 class="text-2xl">เร็วมาก</h2>
				<p>
					pcshs-short ทำให้การเข้าใช้งานเว็ปต่างๆเร็วขึ้นอย่างเห็นได้ชัดด้วยการทำให้คุณเข้าใช้งาน
					Link ที่สั้นลง
				</p>
			</div>
			<div
				class="carousel-item feature-container-card sm:w-52 w-[calc(100%-28px)] box-content flex p-4 flex-col sm:items-center items-start h-64 rounded-2xl"
			>
				<Icon icon="mdi:link" class="text-6xl" />
				<h2 class="text-2xl">สั้นกว่าเดิม</h2>
				<p>psh-short ทำให้ Link นั้นสั้นกว่าเดิมไม่ว่า Link ที่คุณให้มานั้นจะยาวเพียงไหนก็ตาม</p>
			</div>
			<div
				class="carousel-item feature-container-card relative sm:w-52 w-[calc(100%-28px)] box-content flex p-4 flex-col sm:items-center items-start h-64 rounded-2xl"
			>
				<div>
					<Icon icon="mdi:play" class="text-6xl" />
					<h2 class="text-2xl font-bold">เริ่มใช้งานเลยตอนนี้</h2>
					<small>
						พิเศษสำหรับอีเมล <code>@pccbr.ac.th</code> และ <code>@pcshsbr.ac.th</code> เท่านั้น
					</small>
				</div>
				<button class="btn btn-primary absolute bottom-0 left-0 right-0 m-3 box-border"
					>สร้าง</button
				>
			</div>
		</div>
		<div>
			<p class="text-center">
				<a href="/login"><button class="btn btn-ghost btn-sm">เข้าสู่ระบบ</button
					></a> เพื่อเริ่มใช้งาน
			</p>
		</div>
</section>
