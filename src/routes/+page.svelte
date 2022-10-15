<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{#each data.cities as city}
		<a href={`./${city.id}`}>
			<h1>{city.title}</h1>
		</a>
	{/each}
</div>

<!-- Before -->
<button class="bg-sky-700 px-4 py-5 text-white hover:bg-sky-800 sm:px-8 sm:py-3"> ... </button>

<!-- After -->
<button class="bg-sky-700 px-4 py-10 text-white hover:bg-sky-800 sm:px-8 sm:py-3"> ... </button>
