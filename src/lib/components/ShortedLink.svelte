<script lang="ts">
	import QrCanvas from '$lib/components/QrCanvas.svelte';
	import Icon from '@iconify/svelte';
	import { downloadUrlStore } from 'sveltefire';
	export let link: string = 'https://phu.best/qqq';
	export {clazz as class}
	export let editLink: string = '/dashboard/links/edit/qqq';
	export let deleteLink: string = '/dashboard/links/delete/qqq?confirm=1';
	export let originalLink: string = 'https://www.youtube.com/watch?v=zZdVwTjUtjg';
	let imageqr: HTMLImageElement | null = null;
	let clazz="";

	function DownloadQRImage() {
		let a = document.createElement('a');
		a.href = imageqr.src;
		a.download = 'qr.png';
		a.click();
	}
	async function copyQRImageToClipboars() {
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

<div class="{clazz} flex gap-4 md:flex-row flex-col overflow-hidden md:justify-between justify-normal">
	<div class="flex md:flex-row flex-col items-center space-x-4">
		<QrCanvas bind:imageele={imageqr} content={link} class="w-28 h-28" />
		<div>
			<div class="flex flex-wrap items-center">
				<p>
					URL : <a class="link link-hover" href={link}>{link.length > 20 ? link.slice(0, 20) + '...' : link}</a>
				</p>
				<button class="ml-2 btn btn-sm"><Icon icon="mdi:content-copy" /></button>
			</div>
			<div class="flex flex-wrap items-center">
				<p>Original URL : <a class="link link-hover" href="{originalLink}">{originalLink.length > 30 ? originalLink.slice(0, 30) + '...' : originalLink}</a></p>
				<button class="ml-2 btn btn-sm"><Icon icon="mdi:content-copy" /></button>
			</div>
		</div>
	</div>
	<div class="flex flex-wrap md:justify-start justify-center gap-2">
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
