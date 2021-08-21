<script lang="ts">
	import Markup from '@feltcoop/felt/ui/Markup.svelte';
	import {quotes} from '$lib/data/quotes';
	import {fade, blur, fly, slide, scale} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';

	let index = 0;

	setInterval(() => {
		index = (index + 1) % 11;
	}, 1000);
</script>

<main class="content">
	{index}
	{#each quotes as quote, i}
		{#if index === i}
			<div transition:scale={{delay: 250, duration: 30, easing: quintOut}}>
				<div class="display_quote_text">{quote.text}</div>
				<div class="display_quote_author">{quote.author}</div>
			</div>
		{/if}
	{/each}
</main>

<style>
	main {
		text-align: center;
		/* TODO should these be on `.column` ? */
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.display_quote_text {
		text-align: center;
		margin-top: 10%;
		font-size: 2.5em;
	}

	.display_quote_author {
		text-align: center;
		font-size: 1.5em;
	}
</style>
