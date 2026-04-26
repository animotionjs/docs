import type { EntryGenerator, PageLoad } from './$types';
import { slugs } from '$lib/components/sandbox.svelte';

export const entries: EntryGenerator = () => {
	return slugs.map((slug) => ({ slug }));
};

export const load: PageLoad = ({ params }) => {
	return { slug: params.slug };
};
