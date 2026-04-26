import { prerender } from '$app/server';

const titles: Record<string, string> = {
	'/': 'Animotion',
	'/docs': 'Introduction',
	'/docs/actions': 'Actions',
	'/docs/code': 'Code',
	'/docs/deployment': 'Deployment',
	'/docs/llms': 'Using AI',
	'/docs/math': 'Math',
	'/docs/motion': 'Motion',
	'/docs/notes': 'Speaker Notes',
	'/docs/setup': 'Setup',
	'/docs/slides': 'Slides',
	'/docs/styles': 'Styles',
	'/docs/transitions': 'Transitions',
	'/docs/whats-new': "What's New"
};

export const getTitle = prerender(
	'unchecked',
	async (path: string) => titles[path] ?? 'Animotion',
	{
		inputs: () => Object.keys(titles),
		dynamic: true
	}
);
