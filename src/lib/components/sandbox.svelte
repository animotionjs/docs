<script module lang="ts">
	import type { Component } from 'svelte';
	import LayoutAnimation from '../../routes/docs/transitions/layout-animation.svelte';

	export const slugs = ['layout-animation'];

	export const examples: Record<string, Component> = {
		'layout-animation': LayoutAnimation
	};
</script>

<script lang="ts">
	interface Props {
		slug: string;
		title?: string;
		width?: number;
		height?: number;
	}

	let { slug, title, width = 960, height = 480 }: Props = $props();
</script>

<iframe src="/sandbox/{slug}" {title} {width} {height} loading="lazy"></iframe>
