<script lang="ts">
	import {quotes} from '$lib/data/quotes';
	import {fade,blur,fly,slide,scale} from 'svelte/transition';
	import {quintOut} from 'svelte/easing';
	import {randomInt} from '@feltcoop/felt/util/random.js';

	let index = randomInt(0, quotes.length);

	setInterval(() => {
		index = (index + 1) % quotes.length;
	}, 5000);
</script>

<main class="content">
	{#each quotes as quote, i}
		{#if index === i}
			<div in:fade={{delay: 350, duration: 300}} out:fade={{duration: 300}}>
				<div class="display_quote_text">{quote.text}</div>
				<div class="display_quote_author">{quote.author}</div>
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
