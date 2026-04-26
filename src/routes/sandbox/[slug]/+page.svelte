<script lang="ts">
	import { examples } from '$lib/components/sandbox.svelte';

	let { data } = $props();

	const Component = $derived(examples[data.slug]);
</script>

{#if Component}
	<Component />
{:else}
	<p>Example "{data.slug}" not found.</p>
{/if}
