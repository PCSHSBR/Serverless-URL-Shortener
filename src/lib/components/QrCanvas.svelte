<script lang="ts">
	import qrcode from 'qrcode';
	import { onMount } from 'svelte';

	let classes: string = '';
	export let size: number = 164;
	/**
	 * @default 2
	 * Define how much wide the quiet zone should be.
	 */
	export let margin: number = 2;
	/**
	 * Define the error correction level.
	 * Possible values are:
	 * - 'L': up to 7% damage
	 * - 'M': up to 15% damage
	 * - 'Q': up to 25% damage
	 * - 'H': up to 30% damage
	 * The percentage indicates the maximum amount of damaged surface
	 * after which the symbol becomes unreadable.
	 * @default 'M'
	 */
	export let errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H' = 'M';
	export { classes as class };
	export let content = 'https://pcshs-short.web.app';
	export let imageele: HTMLImageElement | null = null;

	onMount(() => {
		// Converting the data into base64
		qrcode.toDataURL(
			content,
			{
				margin,
				errorCorrectionLevel,
				width: size
			},
			function (err, code) {
				if (err) return console.log('error occurred');
				if (!imageele) return console.log('imageele is null');
				imageele.src = code;
			}
		);
	});
</script>

<img src="" bind:this={imageele} class={classes} alt="qr" />
