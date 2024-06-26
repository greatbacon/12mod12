import type {Task} from '@ryanatkn/gro';
import {spawn} from '@ryanatkn/belt/process.js';
import {SVELTEKIT_BUILD_DIRNAME} from '@ryanatkn/gro/paths.js';

const STATIC_REPO = '../greatbacon.github.io';

export const task: Task = {
	summary: 'deploy static website to prod',
	production: true,
	run: async ({invoke_task}) => {
		await invoke_task('clean');
		await invoke_task('build');
		const timestamp = Date.now();

		await spawn('git', [`-C`, `${STATIC_REPO}`, `pull`]);
		await spawn('cp', [`-r`, `${SVELTEKIT_BUILD_DIRNAME}/.`, `${STATIC_REPO}`]);
		await spawn('git', [`-C`, `${STATIC_REPO}`, `add`, `.`]);
		await spawn('git', [`-C`, `${STATIC_REPO}`, `commit`, `-m`, ` "new deploy ${timestamp}"`]);
		await spawn('git', [`-C`, `${STATIC_REPO}`, `push`]);
	},
};
