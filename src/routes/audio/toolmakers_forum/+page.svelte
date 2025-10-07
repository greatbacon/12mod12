<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	//import feedData from '$lib/feed.json';
	//import PodcastEpisodeList from '$lib/PodcastEpisodeList.svelte';
</script>

<svelte:head>
	<title>Toolmakers Forum</title>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="RSS feed for Toolmakers Forum podcast"
		href="rss.xml"
	/>
</svelte:head>

<div class="content">
	<Header title="TOOLMAKERS FORUM" />
	<div class="album">
		<img
			src="/portfolio/img/tmf_logo_thumbnail.png"
			alt="an oil painting of a workshop with the white text Toolmakers Forum in the uper right corner"
		/>
	</div>
	<section>
		<p>
			A podcast about tools and the people who make them. Part of the now defunct Felt project. Although no new episodes will be produced, the content of these episodes still informs the successor Loom project.
		</p>
		<p>
			To subscribe use <a href="rss.xml">this RSS link</a>.
		</p>
	</section>
</div>

<!--<PodcastEpisodeList episodes={feedData.episodes} /> -->

<style>
	section {
		text-align: center;
	}
	.album {
		text-align: center;
	}
</style>
