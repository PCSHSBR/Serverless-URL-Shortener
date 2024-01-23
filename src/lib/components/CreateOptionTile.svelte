<script lang="ts">
	const examplePreview = {
		normal: 'https://pcshsbr.page.link/3J6Y',
		unguessable: 'https://pcshsbr.page.link/4dsSDasd9',
		custom: 'https://pcshsbr.page.link/library-week-2023'
	};
	export let type: keyof typeof examplePreview = 'normal';
	export let userInput = {
		domain: 'pcshsbr.page.link',
		customLink: '',
		linkOption: 'normal'
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<label
	class="justify-start space-x-3 flex flex-row p-2 border-[0.1rem] border-base-100 rounded-xl cursor-pointer duration-200
  {userInput.linkOption === type ? 'border-primary bg-primary/10' : 'hover:bg-primary/10 hover:border-primary/20 hover:shadow-lg'}
  "
>
	<input
		class="radio m-1 checked:radio-primary"
		type="radio"
		name="link_option"
		on:change|preventDefault={() => (userInput.linkOption = type)}
		checked={userInput.linkOption === type}
	/>
	<div class="">
		<slot />
		<p class="label-text text-base-content/50">
			Example: {examplePreview[type] || examplePreview['normal']}
		</p>
	</div>
</label>
