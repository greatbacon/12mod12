<script lang="ts">
	import {jewelry} from '$lib/data/jewelry';
	import Header from '$lib/ui/Header.svelte';
</script>

<Header title="JEWELRY" />

<main class="content">
	{#each jewelry as piece}
		<div class="brief">
			<div class="brief_thumbnail">
				<img class="brief_thumbnail" src={piece.thumbnail} alt="Blank of money obverse" />
			</div>
			<div class="brief_title">
				<span>{piece.title}</span>
			</div>
			<div class="brief_subtitle">
				<span>First aquired by {piece.origOwner}</span>
				<br />
				<span>Estimated made in {piece.start}</span>
			</div>
			<div class="brief_description">				
				{piece.content}
			</div>
		</div>
	{/each}
</main>

<style>
	div.brief {
		padding-top: 1%;
		padding-bottom: 1%;
		padding-left: 5%;
		padding-right: 5%;
		overflow: auto;
		border-bottom-style: dotted;
		border-color: #00ff00;
	}

	img.brief_thumbnail {
		height: auto;
		width: auto;
		max-width: 400px;
		max-height: 200px;
	}

	div.brief_title span {
		font-size: 2em;
		text-decoration: underline;
		padding-left: 1%;
	}

	div.brief_subtitle span {
		font-size: 1.5em;
		padding-left: 1%;
	}

	div.brief_description {
		font-family: 'times-new-roman';
		color: #ffffff;
		padding-left: 1%;
		display: flex;
	}
</style>
