<script lang="ts">
	import {onMount} from 'svelte';
	let title = '12M0D12';

	onMount(() => {
		setInterval(() => {
			let elem = document.getElementById('text_header');
			let value = elem.innerHTML;
			if (elem.innerHTML == title + '_') {
				elem.innerHTML = title + '&nbsp;';
				value = elem.innerHTML;
			} else {
				elem.innerHTML = title + '_';
				value = elem.innerHTML;
			}
		}, 500);
	});
</script>

<header class="content">
	<h1 id="text_header">{title}</h1>
</header>

<style>
	header {
		text-align: center;
		margin-left: 0px;
		font-size: 3rem;
	}
</style>
