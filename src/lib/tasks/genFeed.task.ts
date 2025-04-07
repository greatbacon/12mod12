import { channel as hzcChannel, manifest as hzcManifest } from '$lib/data/audio/hzc-manifest';
import { channel as hoeChannel, manifest as hoeManifest } from '$lib/data/audio/hoe-manifest';
import { channel as desfreeChannel, manifest as desfreeManifest } from '$lib/data/audio/des-free-manifest'
import { channel as toolmakersChannel, manifest as toolmakersManifest } from '$lib/data/audio/toolmaker-manifest'
import { generateFeed, type Manifest, type PodcastChannel } from '$lib/podcast';
import type {Task} from '@ryanatkn/gro';

interface Podcasts {
	channel: PodcastChannel;
	manifest: Manifest[];
    bucket: string;
}

//TODO this should live in a seperate file, eventually a db or a lock file in a bucket?
const MANIFEST: Podcasts[] = [
	{
		channel: hzcChannel,
		manifest: hzcManifest,
        bucket: ""
	},
	{
		channel: hoeChannel,
		manifest: hoeManifest,
		bucket: "" 
	},
	{
		channel: desfreeChannel,
		manifest: desfreeManifest,
		bucket: "" 
	},
	{
		channel: toolmakersChannel,
		manifest: toolmakersManifest,
		bucket: "" 
	},
];

export const task: Task = {
	summary: `generate personal rss feeds for various podcasts`,	
	run: async ({args, log}) => {		
        for (const cast of MANIFEST){                        
            generateFeed(cast.channel, cast.manifest, cast.bucket);
        }
    }
}