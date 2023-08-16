<script>
	import '@fontsource-variable/anuphan';
	import '../app.postcss';
	import Navbar from '../lib/Navbar.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		const currentTheme = localStorage.getItem('theme');
		const htmlElement = document.querySelector('[data-theme]');
		htmlElement.setAttribute('data-theme', currentTheme);
	});
</script>
<main>
	<slot />
</main>