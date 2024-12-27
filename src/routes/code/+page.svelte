<script lang="ts">
	import {code} from '$lib/data/code';
	import Header from '$lib/ui/Header.svelte';
</script>

<Header title="CODE" />

<main class="content">
	{#each code as blurb}
		<div class="brief">
			<div class="brief_thumbnail">
				<img src={blurb.thumbnail} alt="The code project thumbnail" />
			</div>
			<div class="brief_title">
				<span>{blurb.title} </span>
			</div>
			<div class="brief_workcycle">
				<span>
					From {blurb.start}
					{#if blurb.wrapped} to {blurb.wrapped}{/if}
				</span>
			</div>
			<div class="brief_description">
				<br />
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html blurb.content}
			</div>
			<div class="brief_link">
				<a href={blurb.link} target="_blank" rel="noopener noreferrer">Learn More ==></a>
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

	div.brief_thumbnail {
		float: left;
		margin-right: 1%;		
	}

	div.brief_title span {
		font-size: 2em;
		text-decoration: underline;		
	}

	div.brief_workcycle span {
		font-size: 2em;		
	}

	div.brief_link a {
		font-size: 2em;		
	}
</style>
