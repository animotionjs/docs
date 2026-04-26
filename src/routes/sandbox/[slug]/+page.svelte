<script lang="ts">
	import { page } from '$app/state';
	import { examples } from '$lib/components/sandbox.svelte';

	const slug = $derived(page.params.slug ?? '');
	const Component = $derived(examples[slug]);
</script>

{#if Component}
	<Component />
{:else}
	<p>Example "{slug}" not found.</p>
{/if}
