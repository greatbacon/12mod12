<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	//import feedData from '$lib/feed.json';
	//import PodcastEpisodeList from '$lib/PodcastEpisodeList.svelte';
</script>

<svelte:head>
	<title>Hollywood Zoo Crew</title>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="RSS feed for Hollywood Zoo Crew podcast"
		href="rss.xml"
	/>
</svelte:head>

<div class="content">
	<Header title="HOLLYWOOD ZOO CREW" />
	<div class="album">
		<img
			src="/portfolio/img/HZC_smol.jpg"
			alt="the hollywood sign with the words zoo crew in yellow text underneath"
		/>
	</div>
	<section>
		<p>
			A comedy improv podcast, here to provide all the 100% true latest news, haps, interviews, and
			reviews of what goes on in Hollywood, outside of it. Project is finished for now, pending any
			bolts of inspiritaion.
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
