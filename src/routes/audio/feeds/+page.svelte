<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	//import feedData from '$lib/feed.json';
	//import PodcastEpisodeList from '$lib/PodcastEpisodeList.svelte';
</script>

<svelte:head>
	<title>FEEDS</title>
</svelte:head>

<div class="content">
	<Header title="FEEDS" />
	<section>
		<ul>
			<li><a href="/audio/DesigningFreedom_CBC_Lectures/rss.xml">Stafford Beer's Designing Freedom Lectures</a></li>
			<li><a href="/audio/hellonearth/rss.xml">Hell On Earth: The 30 Years War</a></li>
			<li><a href="/audio/hollywoodzoocrew/rss.xml">Hollywood Zoo Crew</a></li>
			<li><a href="/audio/toolmakers_forum/rss.xml">Toolmakers Forum</a></li>
		</ul>
	</section>
</div>

<!--<PodcastEpisodeList episodes={feedData.episodes} /> -->

<style>
	section {
		text-align: center;		
	}

	ul {
		list-style-type: none;
	}
</style>
