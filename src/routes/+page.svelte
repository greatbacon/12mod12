<script lang="ts">
	import {quotes} from '$lib/data/quotes';
	import Header from '$lib/ui/Header.svelte';
	import {fade} from 'svelte/transition';

	let index = Math.floor(Math.random() * quotes.length);
	$: quote = quotes[index];

	setInterval(() => {
		index = (index + 1) % quotes.length;
	}, 5000);
</script>

<Header />

<main class="content">
	<div class="nav">
		<button type="button" on:click={() => (index = (index - 1) % quotes.length)}>&lt;==</button>
		<button type="button" on:click={() => (index = (index + 1) % quotes.length)}>==&gt;</button>
	</div>
	{#key quote}
		<div class="quote_block" in:fade|local={{duration: 400}}>
			<div class="display_quote_text">
				{quote.text}
			</div>
			<div class="display_quote_author"><a href={quote.link} target="_blank">{quote.author}</a></div>
		</div>
	{/key}
</main>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}
	.quote_block {
		height: 50%;
	}
	.display_quote_text {
		text-align: center;
		font-size: 2.5em;
	}
	.display_quote_author {
		text-align: center;
		font-size: 1.5em;
	}
	.nav {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button {
		width: 200px;
		height: 50px;
		font-size: 2em;
		text-align: center;
		background: none;
		border: none;
		color: #00ff00;
		font-family: 'fixsys';
	}
	button:hover {
		color: #017501;
	}
</style>