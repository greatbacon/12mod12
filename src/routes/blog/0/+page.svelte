<script lang="ts">
	import {blogs} from '$lib/data/blog';
	import Header from '$lib/ui/Header.svelte';

	const blurb = blogs[0];
</script>

<Header title="BLOG" />

<main class="content">
	<div class="brief">
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
				published {blurb.start}
				{#if blurb.wrapped} to {blurb.wrapped}{/if}
			</span>
		</div>
	</div>
	<div class="blog">
		<p>
			There is no doubt that Twitter is collapsing. Millions of bytes have flown over the last few
			weeks describing the chaos both on the platform and in the private domain of its offices.
		</p>
		<p>
			Advertisers have pulled out, poorly thought out technical decisions have been made, hastily
			designed products have shipped, the majority of staff have either been fired or walked out the
			door, and the new owner and CEO is publicly melting down ON the platform for all the world to
			see. Some real grade A content if you will. The Adam McKay movie is writing itself.
		</p>
		<p>
			Yet as dumb as the whole saga is, it feels like there’s clearly something else at stake here,
			some sort of loss being felt. As much of a carnival as Twitter has always been, there is
			social value in it.
		</p>
		<p>
			The widespread recording and reporting of police brutality in communities leading to the Black
			Lives Matter movement and the George Floyd protests of 2020 likely couldn’t have occurred
			without it. Last year when a wildfire broke out in the north suburbs of Denver, I used the
			platform to get almost real-time info and pass it on to friends and family living close to the
			disaster.
		</p>
		<p>
			It’s the place to go for breaking & front page news. To hear the latest japes and gossip. It’s
			one of the town squares of the internet. And now it’s on fire while a lone, pathetic,
			billionaire is trying to rip it apart and sell it for scrap after buying it on a whim.
		</p>
		<h2>So, what’s next?</h2>
		<p>
			Some people are starting to look for the future in newer, less established spaces. But what if
			before our society immediately moves on to the next big thing, we take a step back to dream of
			a green field. If we could do it all over again, what should it look like?
		</p>
		<p>
			To start with let’s talk about the elephant in the room, Mastodon, which is one of the new
			things that people have been migrating towards. Mastodon is part of the Fediverse, a
			collection of open source tools and platforms that prize decentralized architecture first and
			foremost. This means allowing anyone to host their own instance of a server and then
			connecting it to other servers in a federated model to gain network effects.
		</p>
		<p>
			So instead of just one single giant ship plying the shitposting seas, it’s a bunch of rafts
			lashed together. If you don’t like how things are going, you can untie your raft and set off
			on your own. Or that’s the idea anyway.
		</p>
		<p>
			But in my experience I’ve found the whole system unintuitive and overwhelming despite the fact
			that I write software for a living. Where am I supposed to make an account? How do I make sure
			I’m in the same network as the funny people I was following on Twitter? Does anyone in this
			federation even live in my state?
		</p>
		<p>
			The barrier to entry is too high and the core architecture of Fediverse software fragments the
			new social network right out of the gate, undermining the very reason Twitter was useful in
			the first place. The replacement has to be centralized, it has to be the same place everyone
			agrees to show up. That’s how town squares work.
		</p>
		<p>
			Another consideration for this future digital town square should be democratic controls baked
			into it from the start. The goal here is to keep any one particular petulant owner from taking
			control of the whole thing. This is ostensibly the purpose of federation in Mastodon, but I’m
			talking about even lower level controls. Elected moderators to patrol the space and ways to
			debate and decide the rules that govern the space. Baked in polls for voting on anything from
			names to new channels to modifying community guidelines. Focus on democratically controlling a
			single instance from within its own framework before jumping straight to federation.
		</p>
		<p>
			Lastly, just like how a good tax base helps keep public places clean and maintained, this
			theoretical future platform would need some mechanism for collecting monetary support from its
			users, instead of an ad driven model. Ad driven platforms will always be forced to sacrifice
			the user experience for driving advertiser metrics.
		</p>
		<p>
			Instead let's talk about things like up-front registration fees or monthly supporter tiers,
			cosmetic items or badges for purchase, and publicly published operational budgets so users
			know how much they need to open their wallets. We could even dream of an honest to god new
			state-run utility that can actually levy taxes to manage and operate the platform!
		</p>
		<p>
			As I’m writing this piece, one of the top trends on Twitter is literally #RIPTwitter. Even if
			the website technically lives on past tonight, it’s clear that it has lost the trust and
			confidence of its community, the lifeblood of any social media platform. So as we stagger out
			of this burning square, we should all take a moment to unplug, touch some grass, talk to our
			friends and family around our kitchen tables, and take a deep breath. In that moment of quiet,
			let’s dream about something better, before we go back to looking for something to fill the
			vacuum.
		</p>
	</div>
</main>

<style>
	div.blog {
		width: 80%;
		padding-left: 10%;
		font-size: 2em;
	}

	div.brief {
		padding-top: 1%;
		padding-bottom: 1%;
		padding-left: 10%;
		padding-right: 5%;
		overflow: auto;
		border-bottom-style: dotted;
		border-color: #00ff00;
	}

	div.brief_title span {
		font-size: 4.55em;
		text-decoration: underline;
		padding-left: 1%;
	}

	div.brief_subtitle span {
		font-size: 2.5em;
		padding-left: 1%;
	}

	div.brief_workcycle span {
		font-size: 2em;
		padding-left: 1%;
	}
</style>
