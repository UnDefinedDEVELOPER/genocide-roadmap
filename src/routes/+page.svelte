<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="tx-lg">
	{#each data.cities as city}
		<h1>
			<a href={`./${city.id}`}>
				{city.title}
			</a>
		</h1>
	{/each}
</div>
