import type {Task} from '@feltcoop/gro';
import fs from 'fs';

//TODO LIST
//PRODUCT
//TODO Show the date of the campsite reservation becoming available
//TODO add more queries

//TECH
//TODO parameratize query builder
//TODO extract entity constructor
//TODO put 'magic numbers' into vars

export interface Campsite {
  campsites_count: number,
  city: string,
  description: string,
  entity_id: string, //this is used to construct urls like https://www.recreation.gov/camping/campgrounds/234512
  name: string,
  preview_image_url: string,
  reservable: boolean,
}

const OUTPUT = 'output.json'

export const task: Task = {
	summary: 'scrape campsite reservations for changes in availability',
	production: true,
	run: async ({invokeTask}) => {
		await invokeTask('clean');
		await invokeTask('build');
    
    //Configure this env var with the `session_id={}` cookie for the Felt actor you are using
    const AUTH_TOKEN=process.env.auth_token;
		
    const DOMAIN = 'https://www.recreation.gov/api/search';
    const EXACT = 'exact=false';
    const LAT = 'lat=39.7435';
    const LNG = 'lng=-105.0619';
    const LOCATION = 'location=Denver%2C%20Colorado';
    const LAT_SW= 'lat_sw=38.790656753602065';
    const LNG_SW ='lng_sw=-106.21873558010947';
    const LAT_NE= 'lat_ne=40.712232330442305';
    const LNG_NE = 'lng_ne=-103.6899132456033';
    const SIZE='size=100';
    const FQ1='fq=-entity_type%3A(tour%20OR%20timedentry_tour)';
    const FQ2='fq=campsite_type_of_use%3AOvernight';
    const FQ3='fq=campsite_type_of_use%3Ana';
    const FQ4='fq=entity_type%3Acampground';
    const FQ5='fq=reservable%3A1';
    const START='start=0';
    const FILTER1='include_unavailable=false';

    const URL = `${DOMAIN}?${EXACT}&${LAT}&${LNG}&${LOCATION}&${LAT_SW}&${LNG_SW}&${LAT_NE}&${LNG_NE}&${SIZE}&${FQ1}&${FQ2}&${FQ3}&${FQ4}&${FQ5}&${START}&${FILTER1}`

    const res = await fetch(URL);

    const json = await res.json();
    const results = json.results as Campsite[]

    //On first run, create an `output.json` file in the same dir with an empty array `[]`
    const previous = JSON.parse(fs.readFileSync(OUTPUT, 'utf8')) as Campsite[];
    if (previous){
       //perform delta check between output & results
       let delta = results.filter(o1 => !previous.some(o2 => o1.entity_id === o2.entity_id));        
       if (delta.length > 0){
        delta.forEach(item => {
          const path = 'https://staging.felt.dev/api/v1/entities';
	        const params = {
            actor: 55,          
            space_id: 714, 
            data: {
              content: `${item.name} @ ${item.city} -- <a target="_blank" href=https://www.recreation.gov/camping/campgrounds/${item.entity_id}>DETAILS HERE</a>`,
              checked: false
            },
            ties: [{source_id: 2912}]          
          };
	        fetch(path, {
		        method: 'POST',
            credentials: 'include',		      
            headers: {
              'Content-Type': 'application/json', 
              'Cookie':`${AUTH_TOKEN}`,
              'Accept': 'application/json',
            },
		        body: JSON.stringify(params),
	        });
        })
        console.log(`generated ${delta.length} new notifications`)
      }        
      else {
        console.log('no changes from last run');
       }
    }    
    fs.writeFileSync(OUTPUT, JSON.stringify(results));

	},
};