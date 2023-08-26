import type {Task} from '@feltjs/gro';
import {spawn} from '@feltjs/util/process.js';
import {DIST_DIRNAME} from '@feltjs/gro/dist/paths.js';

const STATIC_REPO = '../greatbacon.github.io';

export const task: Task = {
	summary: 'deploy static website to prod',
	production: true,
	run: async ({invokeTask}) => {
		await invokeTask('clean');
		await invokeTask('build');
		const timestamp = Date.now();

		await spawn('git', [`-C`, `${STATIC_REPO}`, `pull`]);
		await spawn('cp', [`-r`, `${DIST_DIRNAME}/svelte-kit/.`, `${STATIC_REPO}`]);
		await spawn('git', [`-C`, `${STATIC_REPO}`, `add`, `.`]);
		await spawn('git', [`-C`, `${STATIC_REPO}`, `commit`, `-m`, ` "new deploy ${timestamp}"`]);
		await spawn('git', [`-C`, `${STATIC_REPO}`, `push`]);
	},
};
