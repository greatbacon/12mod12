<script lang="ts">
	import {onMount, onDestroy} from 'svelte';
	export let title = '12M0D12';

	const header = title + "_";
	const index = title.length;


	let interval;

	onMount(() => {				
		interval = setInterval(() => {
			let elem = document.getElementById('text_header');								
			let root = elem.innerHTML.substring(0,index);						
			if (elem.innerHTML == root + '_') {
				elem.innerHTML = root + '&nbsp;';				
			} else {
				elem.innerHTML = root + '_';				
			}
		}, 500);		
	});

	onDestroy(() => clearInterval(interval));

	
</script>

<header class="content">
	<h1 id="text_header">{header}</h1>
	<div>
		<a href="/">HOME</a>|<a href="/code">CODE</a>|<a href="/audio">AUDIO</a>|WRITING|PHOTOS|<a href="/about">ABOUT</a></div>
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
</style>
