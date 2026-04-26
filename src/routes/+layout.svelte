<script lang="ts">
	import { page } from '$app/state';
	import PageTransition from '$lib/components/transition.svelte';
	import Header from '$lib/components/header.svelte';
	import { getTitle } from './data.remote';
	import '../app.css';

	let { children } = $props();

	const title = $derived(await getTitle(page.route.id ?? '/'));
	const isIframe = $derived(page.route.id?.startsWith('/sandbox'));
</script>

<PageTransition />

<svelte:head>
	<title>{title}</title>
	<meta
		content="Animotion is a presentational framework for creating beautiful slides and visualizing ideas with code."
		name="description"
	/>
	<meta content={title} property="og:title" />
	<meta content="https://animotion.pages.dev/social.png" property="og:image" />
	<meta content="https://animotion.pages.dev/social.png" property="og:url" />
	<meta
		content="Animotion is a presentational framework for creating beautiful slides and visualizing ideas with code."
		property="og:description"
	/>
	<meta content="Animotion" property="og:site_name" />
	<meta content="@joyofcodedev" name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={title} name="twitter:title" />
	<meta
		content="Animotion is a presentational framework for creating beautiful slides and visualizing ideas with code."
		name="twitter:description"
	/>
	<meta content="https://animotion.pages.dev/social.png" name="twitter:image" />
</svelte:head>

{#if !isIframe}
	<Header />
{/if}

{@render children()}
