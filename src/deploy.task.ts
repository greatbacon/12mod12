import type {Task} from '@feltcoop/gro';
import {spawn} from '@feltcoop/felt/util/process.js';
import {DIST_DIRNAME} from '@feltcoop/gro/dist/paths.js';

let applicationName = '12M0D12';
let user = <user>
let destination = <destination>;

export const task: Task = {
	summary: 'deploy static website to prod',
	production: true,
	run: async ({invokeTask}) => {
		await invokeTask('clean');
		await invokeTask('build');
		let timestamp = Date.now();
		let artifact_name = `${applicationName}_${timestamp}`;
		console.log(`Working with artifact: ${artifact_name}`);
		await spawn('tar', [
			'-cvf',
			`${artifact_name}.tar`,
			`-C${DIST_DIRNAME}/svelte-kit`,			
			`.`,
		]);
		console.log(`Preparing to copy: ${artifact_name}`);
		await spawn('scp', [`-o User=${user}`,`${artifact_name}.tar`, `${destination}:mainwebsite_html/${artifact_name}.tar`]);
		//unpack & start server
		console.log(`Unpacking deployment: ${artifact_name}`);
		await spawn('ssh', [					
			`-l${user}`,`${destination}`,			
			`cd mainwebsite_html;
			pwd;						
			tar -xvf ${artifact_name}.tar;						
			rm *.tar;`,
		]);
	},
};
