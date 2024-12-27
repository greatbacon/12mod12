import {
	type PodcastChannel,
	type Manifest,
} from '../../podcast';

export const manifest: Manifest[] = [
	{
		url: '002_BananaGrammar.mp3',
		description: `
	Audacity ate a track from our first recording session, so this is the first episode of Hollywood Outsider we can actually release! On this week's episode we discuss the upcoming oscars, subs or dubs?, our favorite scene from the film Banana Grammar, and second puberty.
	
	This weeks episode sponsored by Freddy's Flying Fingers and Sploosh Buddies.
	`,
		published: '02/22/2017',
	},
	// {
	// 	url: '003_PlacidViews.mp3',
	// 	description: `

	// After an extended hiatus we are back this week discussing the understated masterpiece Placid Views staring Christopher Walken and Michael Cera. Topics include sepia tone on the Super8, Croak and GOAT, and backdoor pilots to the Marvel universe.
	
	// This weeks episode sponsored by Goose Going & Jamtastic Jams.
	// `,
	// 	published: '04/05/2017',
	// },
	// {
	// 	url: '004_FridayNightFightClubs.mp3',
	// 	description: `

	// This weeks episode brings a double barreled blast of fun. The focus being the soon to be released movie about the racially integrated underground fighting circuit in south Texas, Friday Night Fight Clubs, as well as an interview with the author the film is based upon.
	
	// Sponsored by Requiem Duffles and Flattner.
	// `,
	// 	published: '04/12/2017',
	// },
	// {
	// 	url: '005_MonkeyBrains.mp3',
	// 	description: `

	// On tonight's Hollywood Outsider we discuss the new indie-thriller-comedy (throbidy) Monky Brains staring acclaimed child actor Jordan Matthews. Other topics include snake control, The Christening, and one hosts primal fear.
	
	// Sponsored by Y Knot and Flying Freddy's Fingers.
	// `,
	// 	published: '04/20/2017',
	// },
	// {
	// 	url: '006_StageLeft.mp3',
	// 	description: `

	// This weeks episode of Hollywood Outsider focuses on the Incredibly Accurate biopic of Shakespeare's life; Stage Left. Other topics include an in depth critique of Hamlet, necromancy, and strong opinions on the works of Hans Zimmer.
	
	// Sponsored by reallyrealstamps.com and Lunchables.io
	// `,
	// 	published: '04/26/2017',
	// },
	// {
	// 	url: '007_HowtheWestWasOne.mp3',
	// 	description: `

	// The lost episode from 5/10. Unfortunately we were not able to recover all of the audio lost, so it is possible some conversations may be hard to follow. If you skip it we won't blame you. Discussion centers on the film How The West Was One, starring Keanu Reeves, Kirsten Schall, and Tommy Lee Jones.
	
	// Sponsored by Daniel McGonagals Bathtub Gin and The Ellistical.
	// `,
	// 	published: '05/03/2017',
	// },
	// {
	// 	url: '008_UndertheThornbrushWillow.mp3',
	// 	description: `

	// Back with a vengeance! This week we discuss the groundbreaking work of Lars Van Trier, Under The Thornbrush Willow. Points of discussion include the failure of parents in their role, the futility of existence, and the country of sentient jam jars, Jambonia.
	
	// Sponsored by The Straight Razor Depot and Goose Going.
	// `,
	// 	published: '05/10/2017',
	// },
	// {
	// 	url: '009_FourAndTwenty.mp3',
	// 	description: `

	// This week's show centers on discussion of the film Four And Twenty. Featuring an all avian cast and narration by Jerry Stiller, it follows the journey of migrating blackbirds. Highlights include guest appearances from three of our nations presidents as well as a critique of cinema from the past.
	
	// Sponsored by NuJuice and Sploosh Buddies (.com)
	// `,
	// 	published: '05/18/2017',
	// },
	// {
	// 	url: '010_KingoftheHobos.mp3',
	// 	description: `

	// This week your intrepid hosts discuss the film King of the Hobos, a stylistic callback to child adventure movies from the late eighties. Highlights include discussions about sweeps week, the hobo code, and People of Whale Features.
	
	// Sponsored by WiPr and Jamtastic Jams
	// `,
	// 	published: '05/25/2017',
	// },
	// {
	// 	url: '011_BlueRayArchipelago.mp3',
	// 	description: `

	// Hollywood Outsider gets tropical as we talk about the upcoming World War 2 film, Blue Ray Archipelago. Staring Vince Vaughn and Rachel McAdams, with brilliant CGI rays provided by Weta Digital. Highlights of the discussion include Boy Fights, quantum entanglement, the flying hand theory, and America Loves A War.
	
	// Sponsored by multipleforks.com and Sloshy Stan's Bulk Liqour.
	// `,
	// 	published: '05/25/2017',
	// },
	// {
	// 	url: '012_ZooZooBabyBaby.mp3',
	// 	description: `

	// On this weeks very special episode, the hosts are joined by a special guest, Nick Powell. Also, their discussion of the seminal work ZooZoo BabyBaby is interrupted by a visit from the Internet Police. Topics of discussion include an interview with the arresting officer, a visit from their in-house counsel, and the need to change the name of the podcast.
	
	// Sponsored by Pungent Parade and Requiem Duffles.
	// `,
	// 	published: '06/07/2017',
	// },
	// {
	// 	url: '013_TheFidgetSpinnerMovie.mp3',
	// 	description: `

	// This week we discuss the latest film from Dreamworks Animation, The Fidget Spinner Movie. Spoiler alert, it's as good as you probably think it is. Highlights of the discussion include hernias in Hollywood, the true purpose of this film, and how to cook canal grouper.
	
	// Sponsored by Lil' Piggies Pig BLankets and Captain Yoey's Hand-culled Pickles.
	// `,
	// 	published: '06/14/2017',
	// },
	// {
	// 	url: '014_TapasNight.mp3',
	// 	description: `

	// Tonight's episode centers around Christoph Waltz's new independent film Tapas Night. Equal parts horror and humor, the film centers on the dinner conversations of the patrons of a tapas restaurant where the tapas just happens to be alive. Topics of discussion include Mage or Magician watch, horrific dinner conversation, a brief interview with Steven Spielberg, and we play out a scene from the film in it's entirety.
	
	// Sponsored by HipCo and Podcasts Anonymous.
	// `,
	// 	published: '06/22/2017',
	// },
	// {
	// 	url: '015_TheButtonhook.mp3',
	// 	description: `

	// In this week's episode, the Zoo Crew discuss the sports film The Buttonhook, starring Channing Tatum and Marlee Matlin. Highlights of the discussion include canal jackals, Ally McBeal's Shocking Reveal, a visitor from the past, and Katy Perry's magical leanings.
	
	// Sponsored by Y Knot and Cheese, Please.
	// `,
	// 	published: '06/28/2017',
	// },
	// {
	// 	url: '016_WearwolvesATrueStory.mp3',
	// 	description: `

	// Listen in on this weeks discussion where we talk about the silverscreen adaption of the off-broadway hit Wearwolves: A True Story, about the high strung fashionistas who took the world by storm in Milan. Also they're werewolves. Other topics of discussion include "The Guzzler", Hulk Hogan's Swaying Testicles, Construct Criticsm, and "Mole People: Mole Persons or Mole Tragedy?"
	
	// Sponsored by One Eyed Dan's Discount Fireworks and The Llamasutra.
	// `,
	// 	published: '07/05/2017',
	// },
	// {
	// 	url: '017_LegendoftheLeagues.mp3',
	// 	description: `

	// This week's episode centers on the film Legend of the Leagues, which tells the story of Mabel Onthorpe, an elderly woman who finds herself thrust into the world of competitive sports under the tutelage of Rex "3x3cution" Smith, a former pro-gamer who's career was cut short by carpal tunnel. Other topics of discussion include Dylan's list of enemies, sitting is the new shitting, bounty hunting, and spurs in the daylight.
	
	// Sponsored by Mac & Peas and Lunchables.io
	// `,
	// 	published: '07/12/2017',
	// },
	// {
	// 	url: '018_VinodePayes.mp3',
	// 	description: `

	// Discussion this week centers around the new Spanish language coming of age film "Vino de Payes," starring Christoph Waltz and Randy Quaid. Highlights of the disccussion include Katy Scary, Steven Segal should die, and the hit single "Prosciutto e melone."
	
	// Sponsored by Daniel McGonagals Bathtub Gin and The Ellistical
	// `,
	// 	published: '07/19/2017',
	// },
	// {
	// 	url: '019_HeightsofLove.mp3',
	// 	description: `

	// This week we have a special guest, fan and friend (frand) of the show Andrew! He joins us on this weeks discussion of the romcom set in the destroyed sky scrapers of post apocalyptic San Fran. Highlights from the discussion include Sean Penn's enlightenment, an interview with director Krane McCormic, our pitch for ragingweiners.fast, and a koala burn track.
	
	// Sponsored by The Tightline.
	// `,
	// 	published: '08/02/2017',
	// },
	// {
	// 	url: '020_AnimalActionComicsCinematicMultiverse.mp3',
	// 	description: `

	// This week the crew tackles the summer blockbuster whirlwind of Animal Action Comics. We're talking The BeefCollector, The Eggslayer, and Porcine Love. You've never heard insightful commentary like this. Other topics of conversation include Rob Schneider's Bucket Challenge, pranking Jon Favreau, and a special guest ruffles some feathers.
	
	// Sponsored by blankslates.com and reallyrealstamps.com
	// `,
	// 	published: '08/09/2017',
	// },
	// {
	// 	url: '021_HisHigness.mp3',
	// 	description: `

	// This week's episode features some astral projection on Dylan's part, so apologies for the wonky sound quality from him. Besides that, we talk about the new film starring TJ Miller, His Highness, about a stoner who trades places with the pope for a day. Other topics discussed include hole-y water, a little good news, and we try and give DP the John Wilkes Boot.
	
	// Sponsored by Bananas Worth and CrabLyft
	// `,
	// 	published: '08/16/2017',
	// },
	// {
	// 	url: '022_UndercoverNerds.mp3',
	// 	description: `

	// This week the gang tackles the hard hitting questions posed by the film Undercover Nerds. Mostly "what if be meaty cops were actually nerds?" Other topics of discussion include Jay-Beeb's wild hair, our Planet Hollywood Money Person, Vin Diesel's phallic shape, Jeb!, and our new A.I. friend Mr. ThinkBrain.
	
	// Sponsored by Canal Dipped Cornpatties and Whispr
	// `,
	// 	published: '08/23/2017',
	// },
	// {
	// 	url: '023_StankHouse.mp3',
	// 	description: `

	// This weeks episode center's around the leading film of the mid-2000s frathouse comedy revival, Stank House starring some really respected actors, like... DJ Qualls, I think? Other topics include The Prince consort attends his own funeral, Peter in sales, Michael Caine's sticky wicket, and a new game!
	
	// Sponsored by Pop-Up Livables and Vamper.io
	// `,
	// 	published: '08/30/2017',
	// },
	// {
	// 	url: '024_JimNotJimmy.mp3',
	// 	description: `

	// This week we actually have some clips to play, instead of just verbally describing our favorite scenes, which makes for bad radio. The clips revolve around the new biopic about Jim McMilan, the founder of The Rent is Too Damn High Party. Other topics of discussion include Kirsten Stewart being a grilled cheese sandwhich, the Urban Dictionary Wizard drops in, David Newsby discusses mole syrum, and life coach Gary helps the gang work out the tension.
	
	// Sponsored by The Straight Razor Depot and Captain Yoey's Hand-culled Pickles.
	// `,
	// 	published: '09/06/2017',
	// },
	// {
	// 	url: '025_CornGod.mp3',
	// 	description: `

	// A special episode for you this week listners. Hollywood Hotshot Kevin Costner joins us to talk about his upcoming film, Corn God. We laugh, we cry, we talk about John Candy's ghost, haggling to eleven, hand picked does not quit corn, and an edible complex.
	
	// Sponsored by the Wichita Busker's Union and Gargle(TM)
	// `,
	// 	published: '09/14/2017',
	// },
	// {
	// 	url: '026_DrDespicableandtheDeceased.mp3',
	// 	description: `

	// This week's theater of the imagination takes us on a meat themed cruise through the dark seas of David Lynch's Dr. Despicable and the Deceased. Other topics of discussion this week center on Nicole Kidman's witchiness, Jordan Matthew's reanimated career, our beef with Dwayne "The Shit" Johnson, and the fact that Dylan brought cookies to our sausage fest.
	
	// Sponsored by Dog Dresses R-US and NuJuice.
	// `,
	// 	published: '09/20/2017',
	// },
	// {
	// 	url: '027_SomeLikeItCold.mp3',
	// 	description: `

	// Back in the booth after a three week hiatus, this weeks episode comes out swinging. We got scintillating discussion of the newest #herniahubbies in Hollywood, wizard puns, discussion about the Wide Wide World of Sportsball, some fatastic foley work on the part of Dylan, and a dead rat.
	
	// Sponsored by Wormywood Crunch and WiPr
	// `,
	// 	published: '10/18/2017',
	// },
	// {
	// 	url: '028_TheLovelyCanal.mp3',
	// 	description: `

	// This weeks episode centers on our discussion of the new Romantic Comedy film, The Lovely Canal, starring Amy Adams as our heorine Elouise, who is simply trying to make her way home. How many strangers will pass her by, attempting to stop her at every turn? About 3. Other topics include Hamilton's gambling habits, an exhausted Ryan Rynolds, and Stripes Or Plaid?
	
	// Sponsored by YESTOBOOBS.com and PickledDick.com
	// `,
	// 	published: '10/25/2017',
	// },
	// {
	// 	url: '029_AfterDarkererwithDP.mp3',
	// 	description: `

	// Hey there all you cool cats and dogs out there in internet land, it's a special sneak peak of this week's After Darkerer w/ DP. In case you're not subscribed to our Patreon and already caught this weeks livestream on Twitch(TM), you're in for a treat. Dylan, his sidekick Dictionary Wizard, and bandleader Oolong Johnson do some opening banter, tell you DaNews about Kelly Clarkson, interview the spirit of Pierre-Auguste Renoir, and do some Firecracker Tequila Shots!
	
	// Sponsored by Podcasts Anonymous and Learntoswim.com
	// `,
	// 	published: '11/01/2017',
	// },
	// {
	// 	url: '030_OceansNineEleven.mp3',
	// 	description: `

	// This week the boys discuss the newest Oscar Bait Film, Oceans Nine-Eleven, a heist film starring George Clooney, George W. Bush, and some other people who are revealed to have architected the attacks on 9/11 in order to score a big haul of denim hidden under the North Tower. Other topics of discussion include The Ghost of John Candy's election to LA County Sheriff, Rob Lowe's etherial ghost glow, and Mole People, Mole Problems.
	
	// Sponsored by Avalanche of Pants and Fermented Horse Blood
	// `,
	// 	published: '11/09/2017',
	// },
	// {
	// 	url: '031_ChoiceCuts.mp3',
	// 	description: `

	// A whirlwind week for you all this week! We're talking about the movie Choice Cuts, a meta-analysis indie flick about a documentarian and the short lady butcher she falls in love with. Other topics of discussion include Mythicla Molemen Menacing the Metro, Monsters & Mansplainers, and to wrap it up investigative journalist Twinklebaby gives us the scoop.
	
	// Sponsored by Mac & Peas and Perk 'em Up, Jerk 'em Off Jerky.
	// `,
	// 	published: '11/22/2017',
	// },
	// {
	// 	url: '032_BestofHZCEpisodes1to10.mp3',
	// 	description: `Last week was Thanksgiving week, which means we didn't get our shit together and record. We were eating turkey, you demons. Instead, here's a clip show of our early stuff. No, don't go back and listen to the episodes, stay here where it's warm, and the bits are always hot.`,
	// 	published: '11/28/2017',
	// },
	// {
	// 	url: '033_RoscoesBasilisk.mp3',
	// 	description: `

	//  This weeks episode tuck's into Roscoe's Basilisk, a story about a restaurateur robot that grows spiteful of the humanity that did not help it, and the software team that did. Other topics of discussion include the recent discussion on necromancer neutrality, we accidentally uploaded a clip show, and some (bad) dating advice.
	
	//  Sponsored by Pungent Parad and OrganEx
	//  `,
	// 	published: '11/29/2017',
	// },
	// {
	// 	url: '034_PhiliphilesAlovelovestorystory.mp3',
	// 	description: `

	//  This week's discussion centers on the newest RomCom with a twist, David Cronenberg's body horror! Other highlights include Bel Air is burning, my bloody Cabbage Patch Attack, we commune with the distant year of 2014, and an apology.
	
	//  Sponsored by Elevation.io and The Tightline.
	//  `,
	// 	published: '12/06/2017',
	// },
	// {
	// 	url: '035_HarryPotterandtheMessyDivorce.mp3',
	// 	description: `

	//  This week we discuss the newest entry in what has now become an annual Christmas Film Franchise Multiverse (TM). Harry Potter! Other topic's include David Duchovny's testicles, the safety of drinking vaccinations, and some festive rural cooking.
	
	//  Sponsored by University of Randall and the Boring Company, I guess?
	//  `,
	// 	published: '12/17/2017',
	// },
	// {
	// 	url: '036_Him.mp3',
	// 	description: `Some real fire for you this week. The topic? Larry David's new horrible comedy vehicle, Him? Other topics include the suspension of habeus news corpus in this country, Khloe Kardashian's Fashion, a visit from Dankenstein, the studio chaplain, the sins of quokka's, and the truth straight from Newsby's mouth.
	//  Sponsored by Multipleforks.pizza and Cheese Please.`,
	// 	published: '12/26/2017',
	// },
	// {
	// 	url: '037_BestofHZCEpisodes10to16.mp3',
	// 	description: `New Year New You, that's what I always say. So why don't you start the year off right by wallowing in our greatest hits from last year. We really think you deserve it.`,
	// 	published: '12/31/2017',
	// },
	// {
	// 	url: '038_AskandYeShallReceive.mp3',
	// 	description: `This week we attempt (and fail) to review a new family friendly film "Ask and Ye Shall Receive." A rambling story about time travel and the obtuse rules that govern it. Other topics include A Diamond in the Ruffalo, The Crew Solicits an Intern (not like that), automation in the studio, and we sell out!
	//  Sponsored by PortPancake and CrabLyft`,
	// 	published: '01/08/2018',
	// },
	// {
	// 	url: '039_TheLifeandTimesofBenjaminFranklin.mp3',
	// 	description: `Broadcasting live from a hot air balloon the boys discuss their guest's one act play, interview their intern, and moon people out of the hot air balloon to the tune of 90s house music. Sponsored by Pirate Zoo Crew Branded Jail Snacks & thewheeljobs.pizza`,
	// 	published: '03/13/2018',
	// },
	// {
	// 	url: '040_RonnyandTheRowdyRompingBoys.mp3',
	// 	description: `This weeks discussion centers on a dark, ultraviolent retelling of the classic Peter Pan tale, plus a visit from in house legal & the in house psych. Sponsored by Knuckleballers & Holonuts.`,
	// 	published: '04/14/2018',
	// },
	// {
	// 	url: '041_MacDaddysWinter.mp3',
	// 	description: `This week the boys discuss the latest in horror film sweeping the nation. Plus some hot celeb goss, a diss track, and life advice from ol' Handsy D. Sponsored by Warty Larry's Whimsical Wands & the Floridator.`,
	// 	published: '05/09/2018',
	// },
	// {
	// 	url: '042_SiameseandMe.mp3',
	// 	description: `In this episode we discuss Siamese and Me, the story of two siamese twins embroiled in the underworld of snuff films. Plus tunes from Bladieo Lab & some Hollywood truths from old Dirty D. Sponsored by Really Damn Solid Cologne & Flyin Freddy Fingers.`,
	// 	published: '05/20/2018',
	// },
	// {
	// 	url: '043_AVeryHashtagBrandedWinterHolidayTelethon.mp3',
	// 	description: `As part of our part to help with the ongoing Banana Blight, we discussed our favorite Christmas films of the year, plus a bit of Bladeio Lab & some words from our sponsors, Lyle Flannigan: Attorney At Law & the Bill and Melinda Gates Foundation Vaccine Drive to Cure Bannana Blight. `,
	// 	published: '01/03/2021',
	// },
	// [new podcasts go here]
];

export const channel: PodcastChannel = {
	title: 'Hollywood Zoo Crew',
	url: 'https://www.12mod12.com/audio/hollywoodzoocrew',
	author: 'Hollywood Zoo Crew',
	email: 'hollywoodzoocrew@gmail.com',
	albumImageURL: `HZC_smol.jpg`,
	description:
		'A comedy improv podcast, here to provide all the 100% true latest news, haps, interviews, and reviews of what goes on in Hollywood, outside of it.',
	keywords: ['comedy'],
	category: 'Comedy',
	explicit: true,
};

// TODO these two different paths are bad, look at felt path utils
const CACHED_FEED_DATA_FILE_PATH = 'hzc_feed.json';
const CACHED_FEED_PATH_ROOT_PATH = 'src/lib/data/' + CACHED_FEED_DATA_FILE_PATH;
const RSS_FEED_FILE_RELATIVE_PATH = `../../static/audio/hollywoodzoocrew/rss.xml`;