import type {Blurb} from '$lib/website';

export const code: Blurb[] = [
	{
		title: 'Loom',
		content: `Since Felt was developed as an open-source project, 
		I forked it in early 2024 & have continued the work of building a programmable social platform. This new iteration is called Loom.`,    
		start: '2024-01-01',		
		thumbnail: '/portfolio/img/loom_logo.png',
		link: 'https://getloom.org',
	},
	{
		title: 'Felt',
		content: `In the winter of 2020 I began coversations about a new software & business project with my business partner <a href="https://ryanatkn.com">Ryan</a>.     
    We began developing a tool for building & maintaing digital communities on the smaller scale.     
    In the process we also hoped to establish a worker-user owned platform cooperative. 
    In the spring of 2021 I quit my paying job to start working on it full-time. 
	Due to life circumstances & creative differences, the partnership (and the project) ended at the end of 2023.`,    
		start: '2020-01-01',
		wrapped: '2023-12-31',
		thumbnail: '/portfolio/img/felt.png',
		link: 'https://web.archive.org/web/20231030173034/https://www.felt.social/',
	},
	{
		title: 'Ibotta Gift Cards (launched as Pay With Ibotta)',
		content: `"Pay straight from the Ibotta app and get instant cash back on your entire purchase. It's quick, easy, and secure."

    Pay With Ibotta was fully released to the public early in 2019, but the project itself had been under development since January of 2018. Functionally a startup within a startup, the original team of Pay With Ibotta started with one product manager, and one engineer (me) writing a Java application. Once a quick proof of concept was finished in February, the team was expanded to two engineers, then doubled again after a few months with a focus on an event driven, microservice oriented architecture. After a year and a half of active development, the feature launched 100% across both Ibotta apps, as well as an in beta in the browser extension. The success of Pay With Ibotta also helped lead to Ibotta closing a series D round of funding, locking in its unicorn status : "https://www.denverpost.com/2019/08/08/mobile-shopping-app-ibotta-denver/"`,
		start: '2018-01-01',
		wrapped: '2019-08-08',
		thumbnail: '/portfolio/img/pwi.png',
		link: 'https://pay.ibotta.com/',
	},
	{
		title: 'Fit-trackr',
		content: `Originally set up as an exercise to practice PHP development in the Kohana framework, interest in the project waned quickly.  A prior porting of this website to a Django framework was the final nail in this project. The code no longer runs in production, but the source can be found at the GitHub link below.  The original "elevator pitch" was as follows.

    A consumer website used to dynamically generate data tracking entries for a user's lift and cardio regiments for the purpose of tracking growth and consistency in excercise. Written in PHP on the Kohana framework, the application strives to provide an open ended interface for users to track whatever their excercise may be using standard metrics and performance benchmarks. Once a large enough data set has been accrued, users will be able to visualize their progess thanks to the powerful display charts generated using javascript frameworks.`,
		start: '2015-05-10',
		wrapped: '2015-12-28',
		thumbnail: '/portfolio/img/fit-trackr.jpg',
		link: 'https://github.com/12mod12/fit-trackr',
	},
	{
		title: 'CABAL: A game of conspiracy and intrigue',
		content:
			"CABAL is a turn based game that simulates various scenarios of factions vying with each other for power. The power of a faction is measured by its wealth, its influence on the world, and the public's opinion of it. The underlying nature of CABAL allows for an almost limitless number of scenarios of competition to be devised. The only limit is the imagination of its user base. From the conflict of the French Revolution to modern political campaigns to galactic conquest in the far flung future, CABAL is open ended enough to allow for all these scenarios and more. Play a hot seat game with your friends or take it online for even more cut throat competion.",
		start: '2012-08-01',
		wrapped: '2012-12-15',
		thumbnail: '/portfolio/img/CABALlogo.jpg',
		link: 'https://github.com/greatbacon/CABAL',
	},
	{
		title: '12MOD12',
		content:
			'This website is my longest running personal project.  Originally only serving a few static HTML files, it has grown to display most of my professional and amateur work over the last 10+ years.  As of this most recent iteration, the website is a static site built with the Sveltekit framework.',
		start: '2012-08-01',
		thumbnail: '/portfolio/img/modtwelve.png',
		link: 'https://github.com/greatbacon/12mod12',
	},
];
