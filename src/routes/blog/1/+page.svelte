<script lang="ts">
	import {blogs} from '$lib/data/blog';
	import Header from '$lib/ui/Header.svelte';

	const blurb = blogs[1];
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
			I think money is fascinating. A physical, malleable thing held in your hands. Taking on the
			form of bills & coins, which themselves carry heavy artistic and symbolic representations of
			the societies that made them. And yet here in the 21st century, the abstract nature of money
			as a mere system of account is underlined everyday by the fact that most of our transactions
			simply involve moving numbers around in a database somewhere. As someone who works as a
			computer programmer & hears about crypto almost everyday, thinking about the form & structures
			of money is inescapable.
		</p>
		<p>
			In my free time I began to read about the history of money & currencies. <a
				href="https://en.wikipedia.org/wiki/History_of_money#Emergence_of_money"
				>I find the roots of it in the Mesopotamian collective grain storage system particularly
				fascinating</a
			>. It started out as a very simple system, where a farmer could deposit some weight of grain
			for a token to be redeemed for that same amount of grain at a later date. So when I was
			listening to the podcast
			<a
				href="https://podtail.com/podcast/american-prestige/e46-the-currency-of-politics-ep-1-w-stefan-eich/"
				>American Prestige</a
			>
			last summer and they had a guest on to talk about money, my ears perked up. Their guest,
			<a href="https://www.stefaneich.com/">Stefan Eich</a>, was on to discuss his new book The
			Currency of Politics. When they started discussing the Mesopotamian grain system I knew I had
			to read the book for myself.
		</p>
		<p>
			Primarily structured as a historical survey of western philosophical thought regarding money &
			the politics that surround it, we start with <a href="https://en.wikipedia.org/wiki/Aristotle"
				>Aristotle</a
			>[<a href="#footnote-1">1</a>] and then climb our way back up through the historical record
			past <a href="https://en.wikipedia.org/wiki/John_Locke">Locke</a>,
			<a href="https://en.wikipedia.org/wiki/Johann_Gottlieb_Fichte">Fichte</a>,
			<a href="https://en.wikipedia.org/wiki/Karl_Marx">Marx</a>, and
			<a href="https://en.wikipedia.org/wiki/John_Maynard_Keynes">Keynes</a>
			before finally taking in the post
			<a href="https://en.wikipedia.org/wiki/Bretton_Woods_system">Bretton Woods</a> status quo.
		</p>
		<p>
			It is also written as a surprisingly cutting-edge and present text. It is not presented in an
			evergreen, disconnected philosophical prose but rather as a voice specifically speaking from
			within the midst of the COVID pandemic and the brewing social and economic unrest that has
			continued to flow from it.
		</p>
		<p>
			One of the most important insights of the book that I took away is that money has not always
			floated above us in a neutral, disconnected manner. In Aristotle’s time, money was very openly
			grounded in the people. Its very power was connected to the polis that minted it, in the same
			way that a collective trust and agreement between a group of humans develops language and
			laws.
		</p>
		<p>
			He was mostly ambivalent about money though. Seeing the same greed and capacity for wealth
			hoarding and power development that we can see in our modern society. But with the
			understanding that its ultimate value came from the same place as laws & language, and thus
			could be a tool for justice.
		</p>
		<p>
			Skipping ahead to Keynes, I found the concept & exploration of his <a
				href="https://en.wikipedia.org/wiki/Bancor">bancor</a
			> particularly interesting and farsighted. It was a supra-national unit of account for international
			finance, pegged to a basket of common commodities. It was a fair, even headed proposal that could
			have led to a more equitable and just society.
		</p>
		<p>
			So of course the US delegation, high off atomic powered victory, rejected it outright in favor
			of the Bretton Woods system that established the U.S. dollar as the de-facto reserve currency
			for international finance. At least until that system broke down & was replaced with the
			current floating exchange rates managed by central banks & backed by the almighty petrodollar.
		</p>
		<p>
			The majority of the book is spent getting its historical house in order, but I found the most
			interesting and insightful part of the book to be the forward looking Epilogue. In my
			experience it is easy for authors to do a historical or literature survey and then just leave
			it at that. It’s rare to have an author with the courage to ask some questions & even propose
			solutions!
		</p>
		<p>
			The three questions that stood out to me were “Who gets to decide who creates money?” “Where
			should money power reside in our constitutions?” and “Is a more democratic money possible?”
		</p>
		<p>
			Based on what I read in this book and what I understand about the world, I have to take for
			granted that the answer to the last question is yes. The alternative is to simply accept that
			the status quo is the best we can have, and considering its blatant failures in this current
			moment I don’t believe that is the case nor do I believe that less democratic control of
			institutions is the answer.
		</p>
		<p>
			Who gets to decide who creates money is a question that I think is given some good
			consideration in the epilogue. The idea of creating more seats at the table of governing
			boards that are accountable to the working class (or really anyone outside the banking
			industry) seems like a good first step. I will always be skeptical of a bureaucrat who says
			that inviting people who are not a part of the bureaucracy to look at their work will make
			things worse in the long run. I’ve been in enough bureaucracies myself to know shirking when I
			see it.
		</p>
		<p>
			As for money power and where it belongs in government I feel less clear. I’m not a
			professional in this space, but I think if there’s one thing this book has made clear it is
			that not having enough outsiders involved in the process has diminished the potential of our
			monetary systems. Pages 214-216 of the book give some good jumping off points though if that’s
			something you’re interested in.
		</p>
		<p>
			This is an academic work and expects the reader to have some familiarity with the field. The
			chapter on Marx in particular assumes a familiarity with his Capital texts that occasionally
			left me feeling lost.
		</p>
		<p>
			But even with my amateurish status in the field I felt well taken care of and was able to get
			new information and insights out of it. My only real critique is that the book took me 10
			times as long to read as I think it should have, as the end notes contained both citations of
			texts that I will never read & the juicy asides that I live for and wish had just been
			footnotes.
		</p>
		<p>
			It also left me with a couple of questions of my own. First, what would a book like this look
			like if more women, and non-white/western thinkers had been surveyed? Second, with the book
			grounding all but the last chapters in the body of a particular person, who is the political
			theorist who best represents the thinking in the post Bretton Woods world?
		</p>
		<p>
			Overall the book is an interesting, educating, and insightful primer about the Western
			political philosophy and approach to money up to the present day. If you have any interest in
			why money is the way it is or how we got to the modern international financial system we live
			in, I highly recommend you <a
				href="https://press.princeton.edu/books/hardcover/9780691191072/the-currency-of-politics"
				>pick this book up</a
			>
			or at least take a listen to the
			<a
				href="https://podtail.com/podcast/american-prestige/e46-the-currency-of-politics-ep-1-w-stefan-eich/"
				>American Prestige interview</a
			> that started me on this path.
		</p>
		<p id="footnote-1">[1] I would expect nothing less from a western philosophical text.</p>
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
