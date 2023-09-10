<script lang="ts">
	import {quotes} from '$lib/data/quotes';
	import Header from '$lib/ui/Header.svelte';
	import {fade} from 'svelte/transition';
	import {randomInt} from '@feltjs/util/random.js';

	let index = randomInt(0, quotes.length);

	// setInterval(() => {
	// 	index = (index + 1) % quotes.length;
	// }, 5000);
</script>

<Header />

<main class="content">
	{#each quotes as quote, i}
		{#if index === i}
			<div
				class="quote_block"
				in:fade|local={{delay: 400, duration: 200}}
				out:fade|local={{duration: 100}}
			>
				<div class="display_quote_text">{quote.text}</div>
				<div class="display_quote_author">--{quote.author}</div>
				<div>
					<button type="button" on:click={() => index--}>&lt;==</button>
					<button type="button" on:click={() => index++}>==&gt;</button>
				</div>
			</div>
		{/if}
	{/each}
</main>

<style>
	.quote_block {
	}
	.display_quote_text {
		text-align: center;
		font-size: 2.5em;
	}

	.display_quote_author {
		text-align: center;
		font-size: 1.5em;
	}
</style>
