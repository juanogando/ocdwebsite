// Content for the OCD Rapid Studio section. Everything the studio pages render
// lives here so copy, pricing and turnaround can change without touching markup.

// TODO: set this to the address briefs should actually land in.
export const STUDIO_EMAIL = 'studio@example.com';

export const STUDIO_TITLE = 'OCD Rapid Studio';
export const STUDIO_TAGLINE = 'Fast-turnaround image work, directed by hand.';
export const STUDIO_DESCRIPTION =
	'OCD Rapid Studio takes a frame and a note and returns finished work. No decks, no discovery call — you mark up the image, we execute the mark.';

export type Service = {
	slug: string;
	href: string;
	name: string;
	summary: string;
	turnaround: string;
	featured?: boolean;
};

export const services: Service[] = [
	{
		slug: 'directed-edits',
		href: '/rapid-studio/directed-edits',
		name: 'Directed Edits',
		summary:
			'Draw on the frame — circle what changes, arrow where it goes, cross out what leaves. We render exactly that mark and send the frame back with it.',
		turnaround: 'From 4 hours',
		featured: true,
	},
	// Placeholder entries — replace or delete once the adjacent services are settled.
	{
		slug: 'stills',
		href: '/rapid-studio#brief',
		name: 'Stills',
		summary:
			'Campaign and catalogue frames built to a written brief, delivered at print resolution with the working layers.',
		turnaround: 'From 24 hours',
	},
	{
		slug: 'motion',
		href: '/rapid-studio#brief',
		name: 'Motion',
		summary:
			'Short-form cuts for social — a still set into movement, or an existing clip regraded and reframed per placement.',
		turnaround: 'From 48 hours',
	},
];

export type Mark = {
	id: string;
	name: string;
	means: string;
	// Stroke colour used for this mark in the legend and the demo frame.
	color: string;
};

// The annotation grammar. Keep this short — a client should learn it in one read.
export const marks: Mark[] = [
	{
		id: 'lasso',
		name: 'Red circle or lasso',
		means: 'Change what is inside this shape. Everything outside it stays as shot.',
		color: '#d32020',
	},
	{
		id: 'arrow',
		name: 'Red arrow',
		means: 'Move it, or point the eye this way. From the thing, toward where it should end up.',
		color: '#d32020',
	},
	{
		id: 'cross',
		name: 'Red cross or strike',
		means: 'Remove it. We rebuild what was behind it.',
		color: '#d32020',
	},
	{
		id: 'hold',
		name: 'Green outline',
		means: 'Protect this. Faces, logos, a garment seam — nothing inside a green line is touched.',
		color: '#1a7f45',
	},
	{
		id: 'note',
		name: 'Written note',
		means: 'A line of text next to a mark beats a paragraph in an email. "Longer", "matte", "cut this higher".',
		color: '#1f2937',
	},
];

export type Step = { title: string; body: string };

export const process: Step[] = [
	{
		title: 'Send the frame',
		body: 'One image, any resolution. A phone screenshot is enough to start a round — send the original file when you approve.',
	},
	{
		title: 'Mark it up',
		body: 'Draw on it in whatever you already have: Photos markup, Procreate, a printout you photograph. Five marks are the whole grammar.',
	},
	{
		title: 'We execute the mark',
		body: 'Each mark becomes one instruction. You get variants of the same direction, not a different idea than the one you drew.',
	},
	{
		title: 'You get it back marked',
		body: 'Delivery includes the finished frame, the variants, and your annotated frame alongside them, so the round is its own record.',
	},
];

export type Tier = {
	name: string;
	turnaround: string;
	rounds: string;
	// TODO: set real prices. "On request" is the honest default until they are fixed.
	price: string;
	best: string;
};

export const tiers: Tier[] = [
	{
		name: 'Rush',
		turnaround: 'Within 4 hours',
		rounds: 'One marked frame, one round back',
		price: 'On request',
		best: 'A single fix standing between a frame and a posting deadline.',
	},
	{
		name: 'Standard',
		turnaround: 'Next working day',
		rounds: 'Up to three rounds of marks on one frame',
		price: 'On request',
		best: 'A hero frame that needs a few passes to land.',
	},
	{
		name: 'Batch',
		turnaround: 'Three working days',
		rounds: 'Up to twenty frames, two rounds each',
		price: 'On request',
		best: 'A whole set — a lookbook, a catalogue drop, a season of stills.',
	},
];

export const canDirect: string[] = [
	'Remove or replace an object — a car, a bystander, a stray cable, a logo.',
	'Change a garment: cut, rise, length, fabric weight, colour.',
	'Relight the frame, or change the weather and the time of day in it.',
	'Extend the frame — open a crop out to a wider format without losing the composition.',
	'Move a subject or an element within the shot.',
	'Set a still into motion: mark the path, get a short clip on that path.',
];

export const limits: string[] = [
	'A mark changes the frame you sent. It cannot recover detail that was never captured — a soft crop stays soft.',
	'Faces and identity hold best inside a green line. If a face must change, send a reference rather than a note.',
	'Text and logos rebuilt from scratch are a redraw, not an edit. Send the asset and we place it.',
	'One mark, one instruction. A lasso around half the frame with six notes in it comes back as a question.',
];
