<script lang="ts">
	import {onMount, onDestroy} from 'svelte';
	export let title = '12M0D12';

	const header = title + '_';
	const index = title.length;

	let interval: string | number | NodeJS.Timeout | undefined;

	onMount(() => {
		interval = setInterval(() => {
			const elem = document.getElementById('text_header');
			const root = elem!.innerHTML.substring(0, index);
			if (elem!.innerHTML === root + '_') {
				elem!.innerHTML = root + '&nbsp;';
			} else {
				elem!.innerHTML = root + '_';
			}
		}, 500);
	});

	onDestroy(() => clearInterval(interval));
</script>

<header class="content">
	<h1 id="text_header">{header}</h1>
	<div class="links">
		<a href="/">HOME</a>|<a href="/blog">BLOG</a>|<a href="/code">CODE</a>|<a href="/audio">AUDIO</a
		>|<a href="/writing">WRITING</a>|<a href="/about">ABOUT</a>
	</div>
</header>

<style>
	header {
		text-align: center;
		margin-left: 0px;
		font-size: 3rem;
	}
	#text_header {
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.content {
		margin-bottom: 2%;
	}
	.links {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>