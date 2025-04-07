import mm from 'music-metadata';
import fetch from 'node-fetch';
import {readFile} from 'node:fs/promises';
import {manifest, channel} from '$lib/data/audio/hzc-manifest.js';
import { writeFileSync } from 'node:fs';

export interface CachedFeedData {
	episodes: PodcastEpisode[];
}
export const DEFAULT_CACHED_FEED_DATA: CachedFeedData = {episodes: []};

export interface Manifest {
	url: string;
	published: string;
	description: string;
}

export interface PodcastEpisode {
	title: string;
	description: string;
	fileLocation: string;
	slug: string;
	length: number;
	duration: number;
	season: number;
	number: number;
	published: string; // `Date.toUTCString`
	explicit: boolean;
	episodeImageURL?: string;
	guid: string;
}

export interface PodcastChannel {
	title: string;
	slug: string;
	url: string;
	author: string;
	email: string;
	albumImageURL: string;
	description: string;
	keywords: string[];
	category: string;
	explicit: boolean;
}

//TODO apple itunes allows for multi/subcategories but I'm being lazy for us
//Apple spec from here: https://help.apple.com/itc/podcasts_connect/#/itcb54353390
//TODO implement all optional/situational tags as well
export const toPodcastXml = (
	channel: PodcastChannel,
	episodes: PodcastEpisode[],
): string => `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:googleplay="http://www.google.com/schemas/play-podcasts/1.0" xmlns:media="http://www.rssboard.org/media-rss" version="2.0">
<atom:link href="${channel.url}/rss.xml" rel="self" type="application/rss+xml"/>
<channel>
	<title>${channel.title}</title>
	<itunes:title>${channel.title}</itunes:title>
	<link>${channel.url}</link>
	<language>en-us</language>
	<copyright>&#169; 2022 ${channel.author}</copyright>
	<itunes:author>${channel.author}</itunes:author>
	<description>${channel.description}</description>
	<itunes:type>episodic</itunes:type>
	<itunes:owner>
		<itunes:name>${channel.author}</itunes:name>
		<itunes:email>${channel.email}</itunes:email>
	</itunes:owner>
	<itunes:image href="${channel.albumImageURL}"/>
	<itunes:category text="${channel.category}"></itunes:category>
	<itunes:explicit>${channel.explicit ? 'yes' : 'no'}</itunes:explicit>
${episodes
	.map(
		(episode) => `
	<item>
		<itunes:episode>${episode.number}</itunes:episode>
		<itunes:episodeType>full</itunes:episodeType>
		<itunes:season>${episode.season}</itunes:season>
		<title>${episode.title}</title>		
		<itunes:title>${episode.title}</itunes:title>
		<description>
			<![CDATA[
			${episode.description}
			]]>
		</description>
		<enclosure 
			url="${episode.fileLocation}" 
			length="${episode.length}" 
			type="audio/mpeg"/>
		<guid isPermaLink="false">${episode.guid}</guid>
		<pubDate>${episode.published}</pubDate>
		<itunes:duration>${episode.duration}</itunes:duration>		
		<itunes:explicit>${episode.explicit ? 'yes' : 'no'}</itunes:explicit>
	</item>
`,
	)
	.join('')}
</channel>
</rss>`;

export const loadEpisodes = async (manifests: Manifest[]): Promise<PodcastEpisode[]> => {
	const episodes = await Promise.all(
		manifests.map(async (manifest) => {		
			console.log(`loading url ${manifest.url} now!`);			
			const file = await fetch(manifest.url, {method: 'GET'});

			const length = Number(file.headers.get('content-length'));
			const type = file.headers.get('content-type')!;
			const pubDate = manifest.published;
			const meta = await mm.parseStream(file.body as any, {mimeType: type, size: length});

			const title = meta.common.title!;
			if (title == null) throw Error('Expected title: ' + manifest.url);
			const number = meta.common.track.no!;
			if (number == null) throw Error('Expected track number: ' + manifest.url);

			const episode: PodcastEpisode = {
				title,
				description: manifest.description,
				fileLocation: manifest.url,
				slug: toSlug(number, title),
				length,
				duration: meta.format.duration!,
				season: 1,
				number,
				published: new Date(pubDate).toUTCString(),
				explicit: false,
				guid: title,
			};
			return episode;
		}),
	);
	return sortEpisodes(episodes);
};

export const sortEpisodes = (episodes: PodcastEpisode[]): PodcastEpisode[] =>
	episodes.sort((a, b) => (a.number > b.number ? -1 : 1));

/**
 * This doesn't do any de-duplication, isn't needed with current usage.
 */
export const mergeEpisodes = (a: PodcastEpisode[], b: PodcastEpisode[]): PodcastEpisode[] => {
	const merged = sortEpisodes(a.concat(b));
	if (merged.length !== new Set(merged.map((m) => m.guid)).size) {
		throw Error('Failed to merge episodes -- the arrays must not have duplicates.');
	}
	return merged;
};

const toSlug = (number: number, title: string): string =>
	`${number}-${title
		.replace(/'/gu, '')
		.toLowerCase()
		.split(' ')
		.map((s) => s.trim())
		.filter(Boolean)
		.join('-')}`;

const BUCKET = '../../static/audio';
const HOST = 'https://magi.12mod12.com/podcasts'
const toRemoteUrl = (show: string, filename: string): string => `${HOST}/${show}/${filename}`;

// Outputs a file with event types that can be imported from anywhere with no runtime cost.
export const generateFeed = async (channel: PodcastChannel, manifest: Manifest[], CACHE_PATH: string, ) => {	
	//const existingCachedFeedData = await loadCachedFeedData(CACHE_PATH);
	manifest.forEach((f) => (f.url = toRemoteUrl(channel.slug, f.url)));
	
	const uncachedEpisodeManifests = manifest;
	// const uncachedEpisodeManifests = manifest.filter(
	// 	(u) => !existingCachedFeedData.episodes.find((e) => e.fileLocation === u.url),
	// );
	// if (!uncachedEpisodeManifests.length) {		
	// 	return [];
	// }
	
	const uncachedEpisodes = await loadEpisodes(uncachedEpisodeManifests);
	const episodes = uncachedEpisodes;
	//const episodes = mergeEpisodes(existingCachedFeedData.episodes, uncachedEpisodes);

	//const finalCachedFeedData: CachedFeedData = {episodes};	
	const xml = toPodcastXml(channel, episodes);
		
	writeFileSync(`./static/audio/${channel.slug}/rss.xml`,xml)
	//TODO write the cache file
};

// const loadCachedFeedData = async (	
// 	cacheFilePath: string,
// ): Promise<CachedFeedData> => {
// 	if (!(await exists(cacheFilePath))) return DEFAULT_CACHED_FEED_DATA;
// 	try {
// 		return JSON.parse(await readFile(cacheFilePath, 'utf8'));
// 	} catch (err) {
// 		return DEFAULT_CACHED_FEED_DATA;
// 	}
// };