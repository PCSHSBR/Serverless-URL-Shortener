<script lang="ts">
	import QrCanvas from '$lib/components/QrCanvas.svelte';
	import Icon from '@iconify/svelte';
	import ShowLinkField from './ShowLinkField.svelte';
	import { twMerge } from 'tailwind-merge';
	import { dev } from '$app/environment';
	export let link: string = 'https://phu.best/qqq';
	export { clazz as class };
	export let views: number = 512;
	export let statisticsLink: string = '/dashboard/links/statistics/qqq';
	export let editLink: string = '/dashboard/links/edit/qqq';
	export let deleteLink: string = '/dashboard/links/delete/qqq?confirm=1';
	export let originalLink: string = 'https://www.youtube.com/watch?v=zZdVwTjUtjg';
	let imageqr: HTMLImageElement | null = null;
	let clazz = '';

	function DownloadQRImage() {
		const a = document.createElement('a');
		if (!imageqr) return dev && console.error('imageqr is null');
		a.href = imageqr.src;
		a.download = 'qr.png';
		a.click();
	}
	async function copyQRImageToClipboars() {
		if (!imageqr) return dev && console.error('imageqr is null');
		try {
			const data = await fetch(imageqr.src);
			const blob = await data.blob();
			await navigator.clipboard.write([
				new ClipboardItem({
					[blob.type]: blob
				})
			]);
			console.log('Image copied.');
		} catch (err: any) {
			console.error(err.name, err.message);
		}
	}
</script>

<div
	class={twMerge('flex gap-4 md:flex-row flex-col md:justify-between justify-normal p-4', clazz)}
>
	<div class="flex md:flex-row flex-col items-center gap-4">
		<QrCanvas bind:imageele={imageqr} content={link} class="w-28 h-28" />
		<div class="flex flex-col w-full">
			<ShowLinkField title="ลิงก์ย่อ" {link} />
			<ShowLinkField title="ปลายทาง" link={originalLink} />
		</div>
	</div>
	<div class="text-sm flex flex-wrap md:justify-start justify-center gap-2">
		<button class="btn btn-sm btn-primary"><Icon icon="mdi:eye" />ดูสถิติ</button>
		<button class="btn btn-sm btn-primary" on:click={copyQRImageToClipboars}
			><Icon icon="mdi:content-copy" />คัดลอกภาพ</button
		>
		<button class="btn btn-sm btn-primary" on:click={DownloadQRImage}
			><Icon icon="mdi:download" />ดาวโหลดภาพ</button
		>
		<button class="btn btn-sm btn-primary"><Icon icon="mdi:edit" />แก้ไข</button>
		<button class="btn btn-sm btn-primary"><Icon icon="mdi:delete" /> ลบ</button>
	</div>
</div>

<style lang="scss">
	.main-container {
		grid-template-columns: 13rem 1fr;
		@apply md:grid p-4 bg-base-200 shadow-xl rounded-xl flex flex-col justify-center md:items-start items-center;
	}
</style>
