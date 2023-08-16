<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<section class="max-w-[calc(792px-24px)] w-[calc(100vw-64px)] mx-auto py-48">
	<p class="text-6xl">
		ทำให้ URL <span
			class="font-extrabold text-primary"
		>
			สั้นกว่าเดิม
		</span> ได้เลยตอนนี้
	</p>
	<div class="url-container dark:bg-dark-base-50 bg-base-200 p-2 my-4 flex">
		<button class="btn btn-primary">ทำให้สั้น</button>
		<input
			type="text"
			class="w-full bg-transparent mx-4 border-none outline-none"
			placeholder="ลิ้งค์"
		/>
	</div>
	<div class="carousel carousel-center w-full px-1 py-4 space-x-4 bg-neutral rounded-box md:justify-center justify-start">
		<div
			class="carousel-item feature-container-card sm:w-[200px] w-[calc(100%-28px)] box-content flex p-4 flex-col  sm:items-center items-start h-64 rounded-2xl"
		>
			<Icon icon="mdi:fast-forward-outline" class="text-6xl" />
			<p class="text-2xl">เร็วมาก</p>
			<p>
				psh-short ทำให้การเข้าใช้งานเว็ปต่างๆเร็วขึ้นอย่างเห็นได้ชัดด้วยการทำให้คุณเข้าใช้งาน Link
				ที่สั้นลง
			</p>
		</div>
		<div
			class="carousel-item feature-container-card sm:w-[200px] w-[calc(100%-28px)] box-content flex p-4 flex-col  sm:items-center items-start h-64 rounded-2xl"
		>
			<Icon icon="material-symbols:link" class="text-6xl" />
			<p class="text-2xl">สั้นกว่าเดิม</p>
			<p>psh-short ทำให้ Link นั้นสั้นกว่าเดิมไม่ว่า Link ที่คุณให้มานั้นจะยาวเพียงไหนก็ตาม</p>
		</div>
		<div
			class="carousel-item feature-container-card sm:w-[200px] w-[calc(100%-28px)] box-content flex p-4 flex-col items-start justify-between h-64 rounded-2xl"
		>
			<div>
				<Icon icon="mdi:play" class="text-6xl" />
				<p class="text-2xl font-bold">เริ่มใช้งานเลยตอนนี้</p>
			</div>
			<button class="btn btn-primary w-full">สร้าง</button>
		</div>
	  </div>
</section>

<style lang="postcss">
	.url-container {
		@apply relative rounded-2xl transition-all duration-100;
		&:focus-within {
			@apply shadow-lg;
			&::after {
				@apply blur-sm;
			}
		}
		&::after {
			transition: all ease 0.5s transition-all duration-100;
			position: absolute;
			top: -2px;
			bottom: -2px;
			left: -2px;
			right: -2px;
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
			border-radius: 1rem;
		}
	}
	.feature-container-card {
		@apply relative bg-base-100 transition-all duration-100;
		&:hover {
			@apply shadow-lg;
			&::after {
				@apply blur-sm;
			}
		}
		&::after {
			@apply transition-all duration-100 absolute rounded-2xl bg-gradient-to-t from-primary/20 to-primary;
			top: -2px;
			bottom: -2px;
			left: -2px;
			right: -2px;
			content: '';
			z-index: -1;
		}
	}
</style>
