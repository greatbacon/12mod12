<script lang="ts">
	import {code} from '$lib/data/code';	

  let src = '/portfolio/CABALlogo.jpg';
</script>

<main class="content">  
	{#each code as blurb, i}					
				<div class="brief">
          <div class="brief_thumbnail">
            <img src="{blurb.thumbnail}" alt="The code project image">
          </div>
          <div class="brief_title">
            <span>{blurb.title}
          </div>
          <div class="brief_workcycle">
            <span>
            From {blurb.start} {#if blurb.wrapped} to {blurb.wrapped}{/if}
            </span>
          </div>
          <div class="brief_description">
            <br/>    						
            <span>{blurb.content}</span>
          </div>          
          <div class="brief_link">
            <a href="{blurb.link}" target="_blank" rel="noopener noreferrer">Learn More ==></a>
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

div.brief_description span{
	font-family: 'times-new-roman';
	color: #ffffff;	
	padding-left: 1%;
	display: flex;
}

div.brief_description span{
	font-family: 'times-new-roman';
	color: #ffffff;	
	padding-left: 1%;
}

div.brief_link a{
	font-size: 2em;
	padding-left: 1%;
}
</style>