import {
    type PodcastChannel,
    type Manifest,
} from '../../podcast';

export const manifest: Manifest[] = [
    {
        url: '01 The Real Threat to _All We Hold Most Dear_.mp3',
        description: `The 1973 CBC Massey Lectures by distinguished cyberneticist Stafford Beer.`,
        published: '01/01/1973',
    },
    {
        url: '02 The Disregarded Tools of Modern Man.mp3',
        description: `The 1973 CBC Massey Lectures by distinguished cyberneticist Stafford Beer.`,
        published: '01/01/1973',
    },
    {
        url: '03 A Liberty Machine in Prototype.mp3',
        description: `The 1973 CBC Massey Lectures by distinguished cyberneticist Stafford Beer.`,
        published: '01/01/1973',
    },
    {
        url: '04 Science in the Service of Man.mp3',
        description: `The 1973 CBC Massey Lectures by distinguished cyberneticist Stafford Beer.`,
        published: '01/01/1973',
    },
    {
        url: '05 The Future That Can Be Demanded Now.mp3',
        description: `The 1973 CBC Massey Lectures by distinguished cyberneticist Stafford Beer.`,
        published: '01/01/1973',
    },
    {
        url: '06 The Free Man in the Cybernetic World.mp3',
        description: `The 1973 CBC Massey Lectures by distinguished cyberneticist Stafford Beer.`,
        published: '01/01/1973',
    },
]

export const channel: PodcastChannel = {
	title: 'Designing Freedom - The CBC Lectures',
	slug: 'DesigningFreedom_CBC_Lectures',
	url: 'https://www.12mod12.com/audio/designingfreedom',
	author: 'Stafford Beer',
	email: 'info@cbc.ca',
	albumImageURL: `album.jpg`,
	description:
		'Distinguished cyberneticist Stafford Beer states the case for a new science of systems theory and cybernetics. His essays examine such issues as "The Real Threat to All We Hold Most Dear," "The Discarded Tools of Modern Man," "A Liberty Machine in Prototype," "Science in the Service of Man," "The Future That Can Be Demanded Now," "The Free Man in a Cybernetic World." Designing Freedom ponders the possibilities of liberty in a cybernetic world.',
	keywords: ['science'],
	category: 'Science',
	explicit: false,
};

// TODO these two different paths are bad, look at felt path utils
const CACHED_FEED_DATA_FILE_PATH = 'des_free_feed.json';
const CACHED_FEED_PATH_ROOT_PATH = 'src/lib/data/' + CACHED_FEED_DATA_FILE_PATH;
const RSS_FEED_FILE_RELATIVE_PATH = `../../static/audio/desfree/rss.xml`;