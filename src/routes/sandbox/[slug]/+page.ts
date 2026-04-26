import type { EntryGenerator } from './$types';
import { slugs } from '$lib/components/sandbox.svelte';

export const entries: EntryGenerator = () => {
	return slugs.map((slug) => ({ slug }));
};
