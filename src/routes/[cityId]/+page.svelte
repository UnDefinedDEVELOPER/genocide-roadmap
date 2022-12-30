<script lang="ts">
	import { afterUpdate } from 'svelte';
	import type { PageData } from './$types';
	import Timeline from '../Timeline.svelte';
	import CurrentPage from '../CurrentPage.svelte';

	export let currentPage: string;
	export let data: PageData;

	afterUpdate(() => {
		console.log(currentPage);
		console.log(data);
	});
</script>

<div id="city-page">
	<div class="top-0 mb-8 h-auto bg-secondary">
		<Timeline bind:current={currentPage} />
	</div>
	<h1 class="mb-12 flex justify-center py-4 text-8xl">
		<!-- {data.city.title} -->Genocid: Prijedor
	</h1>
	<div class="animate-move-md transition-opacity">
		<CurrentPage page={currentPage} />
	</div>
	<div class="footer relative bottom-0 mt-32 h-auto w-full bg-secondary">
		<div class="m-auto flex h-40 w-2/3 items-center justify-between ">
			<h1 class="h1 text-3xl">Genocid: Prijedor</h1>
			<button class="btn btn-active">Sljedeća stranica</button>
		</div>
	</div>
</div>

<style>
	#city-page {
		min-height: 100vh;
	}

	.footer h1 {
		line-height: normal;
	}
</style>
