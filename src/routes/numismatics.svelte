<script lang="ts">
	import {monies} from '$lib/data/numismatics';	
	import Header from '$lib/ui/Header.svelte'; 
  
</script>

<Header title="NUMISMATICS" />

<main class="content">  
	{#each monies as money, i}					
				<div class="brief">          
          <div class="brief_thumbnail">
            <img class="brief_thumbnail" src="{money.obverse}" alt="Blank of money obverse"><img class="brief_thumbnail" src="{money.reverse}" alt="Blank of money reverse">
          </div>          
          <div class="brief_title">
            <span>{money.name}</span>
          </div>          
          <div class="brief_subtitle">
            <span>{money.code.alpha} {money.code.symbol} {money.value} -- Issued in {money.issued}</span>
          </div>          
          <div class="brief_description">              						
            {@html money.description}
          </div>
          {#if money.link}          
          <div class="brief_link">
            <a href="{money.link}" target="_blank" rel="noopener noreferrer">Learn More ==></a>
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
	overflow:auto;
	border-bottom-style: dotted;
	border-color: #00ff00;
}

img.brief_thumbnail{	
  height: auto; 
  width: auto; 
  max-width: 400px; 
  max-height: 200px;
}

div.brief_title span{
	font-size: 2em;
	text-decoration: underline;
	padding-left: 1%;
}

div.brief_subtitle span{
  font-size: 1.5em;
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