<script lang="ts">
	import { afterUpdate } from 'svelte';
	import type { PageData } from './$types';
	import Timeline from '../Timeline.svelte';

	export let currentPage: string;
	export let data: PageData;

	afterUpdate(() => {
		console.log(currentPage);
		console.log(data);
	});
</script>

<div>
	<Timeline bind:current={currentPage} />
	<h1 class="flex justify-center py-4 text-7xl">{data.city.title}</h1>
	<!-- 	<img src={data.city.img} alt={data.city.img_alt} />
	<p>{data.city.body}</p> -->
</div>
