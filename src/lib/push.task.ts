import type {Task} from '@grogarden/gro';
import {spawn} from '@grogarden/util/process.js';
import {SVELTEKIT_DIST_DIRNAME} from '@grogarden/gro/paths.js';

const STATIC_REPO = '../greatbacon.github.io';

export const task: Task = {
	summary: 'deploy static website to prod',
	production: true,
	run: async ({invoke_task}) => {
		await invoke_task('clean');
		await invoke_task('build');
		const timestamp = Date.now();

		await spawn('git', [`-C`, `${STATIC_REPO}`, `pull`]);
		await spawn('cp', [`-r`, `${SVELTEKIT_DIST_DIRNAME}/svelte-kit/.`, `${STATIC_REPO}`]);
		await spawn('git', [`-C`, `${STATIC_REPO}`, `add`, `.`]);
		await spawn('git', [`-C`, `${STATIC_REPO}`, `commit`, `-m`, ` "new deploy ${timestamp}"`]);
		await spawn('git', [`-C`, `${STATIC_REPO}`, `push`]);
	},
};
