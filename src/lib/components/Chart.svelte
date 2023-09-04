<script lang="ts">
	export { clazz as class };
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	let clazz = '';

	// let ctx: HTMLCanvasElement;
	// onMount(() => {
	// 	new Chart(ctx, {
	// 		type: 'line',
	// 		data: {
	// 			labels: ['อาทิตย์ที่แล้ว', 'อาทิตย์นี้', 'อาทิตย์หน้า', 'อาทิตย์หน้าจากนี้ไป'],
	// 			datasets: [
	// 				{
	// 					label: 'ยอดการเข้าชม',
	// 					data: [1000, 2500, 3000, 5000],
	// 					fill: false,
	// 					borderColor: 'rgb(75, 192, 192)',
	// 					tension: 0.1
	// 				}
	// 			]
	// 		},
	// 		options: {
	// 			responsive: true,
	// 			plugins: {
	// 				legend: {
	// 					position: 'top'
	// 				},
	// 				title: {
	// 					display: true,
	// 					text: 'ยอดการเข้าชม'
	// 				}
	// 			}
	// 		}
	// 	});
	// });
</script>

<!-- <canvas class={twMerge('chart', clazz)} bind:this={ctx} /> -->
