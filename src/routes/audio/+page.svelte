<script lang="ts">
	import {audio} from '$lib/data/audio';
	import Header from '$lib/ui/Header.svelte';
</script>

<Header title="AUDIO" />

<main class="content">
	{#each audio as blurb}
		<div class="brief">
			{#if blurb.thumbnail}
				<div class="brief_thumbnail">
					<img class="brief_thumbnail" src={blurb.thumbnail} alt="Blank thumbnail for audio" />
				</div>
			{/if}
			<div class="brief_title">
				<span>{blurb.title}</span>
			</div>
			{#if blurb.subtitle}
				<div class="brief_subtitle">
					<span>{blurb.subtitle}</span>
				</div>
			{/if}
			<div class="brief_workcycle">
				<span>
					{blurb.start}
					{#if blurb.wrapped} to {blurb.wrapped}{/if}
				</span>
			</div>
			<div class="brief_description">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html blurb.content}
			</div>
			{#if blurb.link}
				<div class="brief_link">
					<a href={blurb.link} target="_blank" rel="noopener noreferrer">Learn More ==></a>
				</div>
			{/if}
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
		float: left;
		height: auto;
		width: auto;
		max-width: 166px;
		max-height: 166px;
	}

	div.brief_thumbnail {
		float: left;
	}

	div.brief_title span {
		font-size: 2em;
		text-decoration: underline;
		padding-left: 1%;
	}

	div.brief_subtitle span {
		padding-left: 1%;
	}

	div.brief_workcycle span {
		font-size: 2em;
		padding-left: 1%;
	}

	div.brief_description {
		font-family: 'times-new-roman';
		color: #ffffff;
		padding-left: 1%;
		display: flex;
	}

	div.brief_link a {
		font-size: 2em;
		padding-left: 1%;
	}
</style>
