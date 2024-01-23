<script lang="ts">
	import Icon from '@iconify/svelte';
	export let link: string = 'https://placeholder.com/300x300';
	export let title = 'ลิงก์';
	export let disabledCopy = false;

	function copyLinkToClipboard() {
		navigator.clipboard.writeText(link);
	}
</script>

<div class="max-w-full w-full">
	<span class="text-sm">{title}</span>
	<div
		class="flex gap-2"
	>
		<p class="p-1.5 w-full max-w-full text-sm bg-base-300 overflow-hidden text-ellipsis flex rounded-md">
			<a class="link link-hover whitespace-nowrap w-auto max-w-full overflow-hidden text-ellipsis" href={link}>{link}</a>
		</p>
		{#if !disabledCopy}
			<button type="button" title="Click to copy" class="btn btn-sm min-w-0" on:click|preventDefault={copyLinkToClipboard}
				><Icon icon="mdi:content-copy" class="h-4 w-4" />
				<span class="sr-only">Click to copy</span>
			</button>
		{/if}
	</div>
</div>
