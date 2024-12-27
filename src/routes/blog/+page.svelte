<script lang="ts">
	import {blogs} from '$lib/data/blog';
	import Header from '$lib/ui/Header.svelte';

	const items = [...blogs].reverse();
</script>

<Header title="BLOG" />

<main class="content">
	{#each items as blurb}
		<div class="brief">
			{#if blurb.thumbnail}
				<div class="brief_thumbnail">
					<img class="brief_thumbnail" src={blurb.thumbnail} alt="Blank profile for writing" />
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
					<a href={blurb.link}>Read Here ==></a>
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

	div.brief_thumbnail {
		float: left;
	}

	img.brief_thumbnail {
		float: left;
		height: auto;
		width: auto;
		max-width: 150px;
		max-height: 150px;
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
		display:inline-block;
	}

	div.brief_link a {
		font-size: 2em;
		padding-left: 1%;
	}
</style>
