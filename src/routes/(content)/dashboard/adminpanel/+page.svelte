<script>
	import Icon from '@iconify/svelte';
	import Chart from '$lib/components/Chart.svelte';
</script>

<svelte:head>
	<title>แดชบอร์ด/ผู้ดูแลระบบ - PCSHSBR Short</title>
</svelte:head>

<section class="md:px-8 px-4 m-auto mx-auto mt-8">
	<h1 class="text-6xl leading-snug">
		หน้าต่าง<span class="font-extrabold text-primary">ผู้ดูแลระบบ</span>
	</h1>
	<div class="my-4 grid md:grid-cols-2 grid-cols-1 gap-4">
		<button class="btn btn-lg h-auto py-8 w-full justify-between">
			<div>
				<div class="flex items-center gap-4">
					<Icon icon="mdi:users" class="text-xl" />จัดการผู้ใช้
				</div>
				<p class="text-sm font-normal text-left">
					จัการผู้ใช้งารและแก้ไขสิทธิ์การเข้าถึงของผู้ใช้งาน
				</p>
			</div>
			<Icon icon="mdi:arrow-right" class="text-xl" />
		</button>
		<button class="btn btn-lg h-auto py-8 w-full justify-between">
			<div>
				<div class="flex items-center gap-4">
					<Icon icon="mdi:link" class="text-xl" />จัดการลิงก์
				</div>
				<p class="text-sm font-normal text-left">
					จัดการลิงก์ที่ถูกทำให้สั้นลงแล้ว
				</p>
			</div>
			<Icon icon="mdi:arrow-right" class="text-xl" />
		</button>
	</div>
	<div class="grid md:grid-cols-2 grid-cols-1 gap-4">
		<div class=" bg-base-200 w-full p-5 rounded-xl">
			<h2 class="text-xl">จำนวนผู้ใช้งาน</h2>
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
	<div>
		<small>version : 0.0.1</small>
	</div>
</section>
