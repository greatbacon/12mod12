<script lang="ts">
	import {quotes} from '$lib/data/quotes';
	import Header from '$lib/ui/Header.svelte';
	import {fade} from 'svelte/transition';	
	import {randomInt} from '@feltjs/util/random.js';

	let index = randomInt(0, quotes.length);

	setInterval(() => {
		index = (index + 1) % quotes.length;
	}, 5000);
</script>

<Header />

<main class="content">
	{#each quotes as quote, i}
		{#if index === i}
			<div in:fade|local={{delay: 350, duration: 300}} out:fade|local={{duration: 300}}>
				<div class="display_quote_text">{quote.text}</div>
				<div class="display_quote_author">--{quote.author}</div>
			</div>
		{/if}
	{/each}
</main>

<style>
	.display_quote_text {
		text-align: center;
		font-size: 2.5em;
	}

	.display_quote_author {
		text-align: center;
		font-size: 1.5em;
	}
</style>
