export interface Blurb {
	title: string;
	subtitle?: string;
	content: string;
	start: string;
	wrapped?: string;
	thumbnail?: string;
	link?: string;
}

export interface Quote {
	author: string;
	text: string;
	link: string;
}

export interface JewelryBlurb extends Blurb {
	type:     "ring"|"watch"|"necklace"|"cufflink"|"pin"|"boloTie"|"buckle"|"knife",
	origOwner: string;
	currentOwner: string;
}
