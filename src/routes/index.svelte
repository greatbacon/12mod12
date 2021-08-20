<script lang="ts">
	import Markup from '@feltcoop/felt/ui/Markup.svelte';

	const quote = {
		author: 'David Wheeler',
		quote:
			'All problems in computer science can be solved by another level of abstraction, except of course for the problem of too many abstractions.',
	};
</script>

<main class="column">
	<h1>{quote.author}</h1>
	<div>{quote.quote}</div>
</main>

<style>
	main {
		text-align: center;
		/* TODO should these be on `.column` ? */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
