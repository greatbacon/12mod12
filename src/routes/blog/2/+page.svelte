<script lang="ts">
	import {blogs} from '$lib/data/blog';
	import Header from '$lib/ui/Header.svelte';

	const blurb = blogs[2];
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
		<h2>Introduction</h2>
		<p>
			In the world of the modern internet, there exists a concept called <a
				href="https://en.wikipedia.org/wiki/Peer_production">peer production</a
			>. You’re probably already very familiar with works produced under this mode. Wikipedia
			primarily bases its content off of peer production. Likewise almost all free and open source
			software like the Linux servers that run 90% of the internet, are also made using peer
			production models.
		</p>

		<p>
			Last year though, something very interesting happened. A meme went viral on Tumblr about a
			fake Martin Scorse film called <a href="https://en.wikipedia.org/wiki/Goncharov_(meme)"
				>Goncharov</a
			>. A collective running bit, the meme attracted songs, spec scripts, movie posters, costume
			designs, and so many other artifacts that would be assembled as part of a pre-production or a
			pitch process for a movie. All of which were created and distributed through a type of
			decentralized, uncoordinated peer production. It made me wonder what could have been produced
			if there had been some tool, structure, or platform to focus all that energy into an actual
			production.
		</p>

		<p>
			Especially, in the light of the ongoing <a
				href="https://en.wikipedia.org/wiki/2023_SAG-AFTRA_strike">SAG-AFTRA</a
			>
			&
			<a href="https://en.wikipedia.org/wiki/2023_Writers_Guild_of_America_strike">WGA strikes</a>,
			I think there’s an interesting moment for change in the way entertainment is produced in the
			USA. The workers that make movies & TV in the country are on strike right now because the
			middleman bureaucracy of studio production has squeezed too hard & has reached the point that
			it is trying to push all the humans who actually make art within the system, out of it.
		</p>

		<p>
			To me, what peer production points towards is a new means of managing the production of goods
			and services that relies on self-organizing, decentralized community networks that can evolve
			organically out of the group members doing the actual creative work & the end customers who
			engage with it. This stands in contrast to the status quo where the control of labor is
			top-down & the work is centralized in as few laborers as possible in order to maximize the
			extraction of profit off of that labor.
		</p>
		<h2>Context</h2>
		<p>
			Crowdfunding as a concept and fundraising mechanism has been around for over a decade now (<a
				href="https://collegian.com/articles/opinion/2012/09/kickstarter-com-is-revamping-how-product-projects-are-funded/"
				>see my piece from 2012</a
			>). It has never been easier to attract money to a project, but now instead of attracting ten
			investors at ten thousand dollars from your local friend, family, & golf network, you can
			attract ten thousand investors at ten dollars a pop from around the world. Which is to say,
			you can get your audience or customers to pay for the production up front and cut out
			investors.
		</p>

		<p>
			This new ease of raising funds undermines one of the value propositions old studios provided.
			The other of course being the purchase, maintenance, and provision of capital intensive studio
			space & filmmaking equipment. However, we are also in a moment where the actual capital costs
			of tools & input commodities have been driven to near zero. A combination of cheap computers,
			smartphone proliferation, and a large number of free post-production tool sets now means that
			the core cost of movie & tv production is the actual creative labor.
		</p>

		<p>
			And now we’re at a point where the big entertainment studios think they can cut writers and
			actors and all the other creative labor out of the production cycle! But you don't get the
			good shit without creative humans. You don’t get novelty without humans. You don’t get art
			without humans!
		</p>

		<p>
			Ultimately this stuff is for and by humans, so to try and squeeze them out of the process with
			AI is just another short-term cost-cutting measure to profit this quarter in exchange for a
			long-term loss. It's ripping the copper out of the walls, it’s squeezing all the juice out of
			the orange just to be left with the bitter pulp.
		</p>

		<p>
			So in a moment where it’s never been easier to raise funds for a project, where it’s never
			been cheaper to produce art, and where the old institutions responsible for fundraising and
			providing the tools & space for the actual humans who make art are trying to squeeze the
			humans themselves out of the picture, what new institutions could we build to put some
			humanity back into our art?
		</p>
		<h2>Proposal</h2>
		<p>
			To start with, I would describe these new forms as a type of worker-customer hybrid
			cooperative. The workers need customers to value & fund the final work (i.e. what good is a
			show to an empty theater) and the customers want the workers to do the work in the first place
			(i.e. what good is money if you can’t exchange it for goods and services).
		</p>

		<p>
			Control & ownership of the cooperative would be represented by two types of shares, one for
			customers & one for workers. The customer shares would be issued as part of crowdfunding
			rounds at the beginning of the project. Worker shares would be issued as part of the actual
			production workflow for things such as contributing concept art, recording voice lines,
			writing scripts, animating scenes, project management, etc. For legal purposes the cooperative
			would have copyrights to the work artifacts and final work, but would release stuff back into
			the public domain or leverage a creative-commons license to prevent work from being locked up
			for more than five years.
		</p>

		<p>
			The shares themselves then have value for a few reasons. A share entitles you to vote on
			steering decisions, authorizing and approving submitted work, and ultimately a share of the
			profits. I would propose that the power/profit/approval ratio between shares skew towards
			worker shares. Something like an 80:20 split and ultimately never going lower than 51% for
			worker shares. The first person to initialize the project would be issued 1 worker share as
			the chief steward, based on the Little Red Hen Principle. Shares would be non-transferable.
		</p>

		<p>
			From those initial points a few work pipelines would need to be tooled up. A core mechanism
			for proposing, planning, intaking, tracking, validating and approving work for the production
			would be needed.
		</p>

		<p>
			A core loop of assigning worker share values to tasks, approving the issuance of the work
			order, & finalizing work artifacts & issuance on delivery would need to be developed. A
			mechanism for assigning & tracking responsibility for keeping different workflows moving
			forward and getting delivered could also be implemented. Lastly, a mechanism for creating
			milestones that when met (and maybe based on supporter approval), disburse actual funds to
			outstanding worker shares for meeting milestones from the funding pool gathered from supporter
			contributions could help keep productions moving.
		</p>
		<h2>Example</h2>
		<p>
			So now that we have a high level idea of what’s going on, let’s look at what an animated
			production of everyone’s favorite Shakespere play, Hamlet, might look like.
		</p>

		<p>
			Pre-production on this should be pretty straightforward. The script is already written (and
			blessedly in the public domain). As it’s going to be animated, there is an opportunity for
			some parallelized production flows too.
		</p>

		<p>
			Starting with the animation side of things, we’re probably going to want some concept art.
			Character design for each of the characters & set design for each of the scenes. The chief
			steward cuts 10 character design tickets & 10 scene design tickets on the workflow tool &
			assigns each a value of 1 worker share, assuming the average artist can conduct the work on
			each ticket in about an hour.
		</p>

		<p>
			This work cut out, it’s time to break out voice acting work. 10 tickets are written calling
			for the first line reads of each of the characters. We assume it’s maybe 5 minutes of finished
			audio, but that it'll have taken the actor an hour to do a few reads & clean up the audio
			before shipping.
		</p>

		<p>
			Some mechanism for gating tickets behind approval of other tickets could be implemented to
			mirror a tryout/portfolio approval process on the part of all cooperative members. That is to
			say, anyone can pull the “first” ticket, but whoever’s work gets the most approval from the
			customer/worker shareholders then gets access to the rest of the tickets in that work bucket.
		</p>

		<p>
			Then you can imagine that as customers fund the project, they can begin to have some say in
			approving or disapproving things. Maybe the workers can’t decide on which actor to pick for
			the part of Hamlet, so they leave the vote open to just customers to pick the actor.
		</p>

		<p>
			Obviously this is not an airtight, ISO standard proposal, it’s more of a thought experiment
			about how to arrange and manage this kind of work but hopefully it paints a decent enough
			sketch.
		</p>
		<h2>Considerations</h2>
		<p>
			Perhaps more complicated endeavors or more complicated productions utilizing this system might
			not work. But in the current crowdfunding environment, there's clearly been some gaps and
			failures and the system isn't fully there anyway. Think of Star Citizen as a great example of
			this. It's relatively easy to get the money, but systems of accountability and checking in
			seem harder to come by.
		</p>

		<p>
			I guess there’s also the caveat that there might be a lot of crap work being produced. The
			free stuff might be overwhelming. But, if you put together a production crew, or production
			community and make a name for yourself that way, or you make a name for yourself as an
			independent animator or a voice actor, supporters can trust the production & workers can trust
			the work.
		</p>
		<h2>Conclusion</h2>
		<p>
			I'm of the opinion that we are on the cusp of software development and platform development
			being democratized and in that process these big lumbering bureaucracies that sit in the
			middle and fundamentally introduce inefficiencies into the system in an effort to arbitrage
			profit will be cleared away in favor of processes & systems similar to the one I have
			described above.
		</p>

		<p>
			I think we can replace these middleman institutions with software systems that distribute the
			decision-making apparatus with collective voting systems and new tools & processes will have
			to be developed to manage and facilitate this distributed democracy.
		</p>

		<p>
			This is food for thought in this moment, where people are being threatened with the notion
			that automation will take creative, novel, generative work away from humans. But what if the
			real truth is that automation is more likely to remove the boring, useless middlemen that have
			given us a decade plus of boring, repetitive Marvel movies (among other things). I like to
			think we’ll get there sooner rather than later and I’m trying to do my part to help move
			things along. I hope, when you see an opportunity to jump aboard, you will too.
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
