<script lang="ts">
	import qrcode from 'qrcode';
	import { onMount } from 'svelte';

	let classes: string = '';
	export let width: number = 164;
	export let height: number = 164;
	export { classes as class };
	export let content = 'https://pcshs-short.web.app';
	export let imageele: HTMLImageElement | null = null;

	onMount(() => {
		// Converting the data into base64
		qrcode.toDataURL(content, function (err, code) {
			if (err) return console.log('error occurred');
			imageele.src = code;
		});
	});
</script>

<img src="" bind:this={imageele} class={classes} alt="qr" />
