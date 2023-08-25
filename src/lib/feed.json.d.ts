declare module '$lib/feed.json' {
	import type {CachedFeedData} from '$lib/podcast';
	const data: CachedFeedData;
	export default data;
}
