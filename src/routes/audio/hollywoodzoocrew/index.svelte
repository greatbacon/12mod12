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
		href="/hollywoodzoocrew/rss.xml"
	/>
</svelte:head>

<div class="content">
	<Header title="HOLLYWOOD ZOO CREW" />
  <div class="album"><img src="/portfolio/img/HZC_smol.jpg"/></div>
	<section>
		<p>A comedy improv podcast, here to provide all the 100% true latest news, haps, interviews, and reviews of what goes on in Hollywood, outside of it. Project is finished for now, pending any bolts of inspiritaion.</p>
		<p>
			To subscribe use <a href="/hollywoodzoocrew/rss.xml">this RSS link</a>.
		</p>
	</section>
</div>
<!--<PodcastEpisodeList episodes={feedData.episodes} /> -->

<style>
	h1 {
		text-align: center;
	}
	section {
		text-align: center;
	}
  .album{
    text-align: center;
  }
  div.brief {		
	padding-top: 1%;
	padding-bottom: 1%;	
	padding-left: 5%;
	padding-right: 5%;
	overflow:auto;
	border-bottom-style: dotted;
	border-color: #00ff00;
}

div.no_image_brief {		
	padding-top: 1%;
	padding-bottom: 1%;	
	padding-left: 5%;
	padding-right: 5%;
	overflow:auto;
	border-bottom-style: dotted;
	border-color: #00ff00;
	text-align: center;
}

div.brief_thumbnail{
	float: left;
}

div.brief_title span{
	font-size: 2em;
	text-decoration: underline;
	padding-left: 1%;
}

div.brief_subtitle span{
	padding-left: 1%;
}

div.brief_workcycle span{
	font-size: 2em;
	padding-left: 1%;
}

div.brief_description {  
	font-family: 'times-new-roman';
	color: #ffffff;	
	padding-left: 1%;
	display: flex;
}

div.brief_link a{
	font-size: 2em;
	padding-left: 1%;
}
</style>