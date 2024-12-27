import { manifest as hzcManifest, channel as hzcChannel } from '$lib/data/audio/hzc-manifest';
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
];

export const task: Task = {
	summary: `generate personal rss feeds for various podcasts`,	
	run: async ({args, log}) => {		
        for (const cast of MANIFEST){                        
            generateFeed(cast.channel, cast.manifest, cast.bucket);
        }
    }
}