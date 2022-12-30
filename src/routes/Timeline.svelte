<script lang="ts">
	const intro = 'Introduction';
	const whatHappened = 'What<br />happened';
	const stories = 'Stories';
	const victims = 'Victims';
	const postWar = 'Post War';
	export let current = 'intro';
</script>

<div class="m-auto w-4/5 py-8">
	<ul class="steps w-full">
		<button
			class="step {current === 'intro'
				? 'step-primary after:transition-all after:duration-200 after:ease-in'
				: ''}"
			on:click={() => (current = 'intro')}
			data-content=""
		>
			{intro}
		</button>
		<button
			class="step {current === 'what-happened'
				? 'step-primary after:transition-all after:duration-200 after:ease-in'
				: ''}"
			on:click={() => (current = 'what-happened')}
			data-content=""
		>
			{@html whatHappened}
		</button>
		<button
			class="step {current === 'stories'
				? 'step-primary after:transition-all after:duration-200 after:ease-in'
				: ''}"
			on:click={() => (current = 'stories')}
			data-content=""
		>
			{stories}
		</button>
		<button
			class="step {current === 'victims'
				? 'step-primary after:transition-all after:duration-200 after:ease-in'
				: ''}"
			on:click={() => (current = 'victims')}
			data-content=""
		>
			{victims}
		</button>
		<button
			class="step {current === 'post-war'
				? 'step-primary after:transition-all after:duration-200 after:ease-in'
				: ''}"
			on:click={() => (current = 'post-war')}
			data-content=""
		>
			{postWar}
		</button>
	</ul>
</div>

<!-- <ul class="steps w-full p-4">
	<a id="intro" class="step step-primary" href="#">{intro}</a>
	<a id="what-happened" class="step" href="#">{@html whatHappened}</a>
	<a id="stories" class="step" href="#">{stories}</a>
	<a id="" class="step" href="#">{victims}</a>
	<a id="post-war" class="step" href="#">{postWar}</a>
</ul> -->
