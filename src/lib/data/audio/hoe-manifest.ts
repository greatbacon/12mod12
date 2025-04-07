import {
    type PodcastChannel,
    type Manifest,
} from '../../podcast';

export const manifest: Manifest[] = [
    {
        url: '001_GOD.mp3',
        description: `A man, a hammer, a nail, a door, history. Martin Luther sets off the protestant reformation and lays the groundwork for a century of violence in Europe.

This first episode of Hell on Earth: The Thirty Years War and the Violent Birth Capitalism is available for free. Subsequent episodes will be released exclusively for Chapo Trap House subscribers on Patreon at patreon.com/chapotraphouse.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com
    `,
        published: '01/11/2023',
    },
    {
        url: '002_DEATH.mp3',
        description: `The Black Death, the rise of the Habsburgs, and the dream of the Universal Monarch.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com`,
        published: '01/18/2023',
    },
    {
        url: '003_KINGS.mp3',
        description: `The royal dynasties of Europe strain to confront reformation, centralization and modernization in their own distinct ways as we bring them up to the eve of the Thirty Years War.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com`,
        published: '01/25/2023',
    },
    {
        url: '004_WINDOWS.mp3',
        description: `Dynastic ambitions, messianic delusions and One High Fall topple the Holy Roman Empire into war.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com`,
        published: '02/01/2023',
    },
    {
        url: '005_INTERVENTION.mp3',
        description: `The Danes stage a daring intervention against the Habsburgs. Enter: Wallenstein & Richelieu.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com`,
        published: '02/08/2023',
    },
    {
        url: '006_THE_NORTH.mp3',
        description: `King Gustavus Adolphus brings the seemingly unstoppable power of Sweden crashing through central Germany.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com`,
        published: '02/15/2023',
    },
    {
        url: '007_HELL.mp3',
        description: `The apocalyptic effects of years of war on the population transform central Europe into Hell on Earth.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com`,
        published: '02/22/2023',
    },
    {
        url: '008_THE_STATE.mp3',
        description: `The Peace of Westphalia concludes the war and introduces a new phase of political and economic conflict to Europe.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com `,
        published: '03/01/2023',
    },
    {
        url: '009_REBELLION.mp3',
        description: `While the Thirty Years War rages on, in England, a similar set of crises leads to Civil War.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com`,
        published: '03/08/2023',
    },
    {
        url: '010_A_NEW_GOD.mp3',
        description: `Commonwealth, Restoration, Glorious Revolution: we complete England’s cycle of political instability and, with a little help from our old friends the Dutch, birth a new order into the world.

Interactive atlas, bibliography and credits for the series can be found at: hellonearth.chapotraphouse.com`,
        published: '03/15/2023',
    },
]

export const channel: PodcastChannel = {
	title: 'Hell On Earth',
	slug: 'hellonearth',
	url: 'https://www.12mod12.com/audio/hellonearth',
	author: 'Matt Christman and Chris Wade',
	email: 'info@chapotraphouse.com',
	albumImageURL: `albumart.jpg`,
	description:
		'Hell on Earth will tell the story of the Thirty Years War, the cataclysmic outbreak of violence in central Europe that lasted from 1618–1648. It’s the story of the long crisis of the 17th century, the birth of Protestantism and the collapse of Catholic Christendom, and ultimately, the gleaming T-800 Terminator skeleton of Capitalism emerging from the rotting corpse of Feudalism. It’s a story of lurid violence from a bygone age, of hot death on the battlefield, and cool intrigue in the palaces of Kings and Emperors. But it’s also the story of climate change, financial collapse, moral panics, speculative bubbles, pandemic, crisis in institutional legitimacy, of conspiracy theories driving policy, and an information revolution that changes the way everyday people relate to their political leaders. Sound familiar? This is the birth of modernity.',
	keywords: ['history'],
	category: 'History',
	explicit: true,
};

// TODO these two different paths are bad, look at felt path utils
const CACHED_FEED_DATA_FILE_PATH = 'hoe_feed.json';
const CACHED_FEED_PATH_ROOT_PATH = 'src/lib/data/' + CACHED_FEED_DATA_FILE_PATH;
const RSS_FEED_FILE_RELATIVE_PATH = `../../static/audio/hellonearth/rss.xml`;