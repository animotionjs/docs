<script lang="ts">
	let { children } = $props();
</script>

{@render children()}

<style>
	:global {
		html {
			scrollbar-gutter: auto !important;
		}

		body {
			margin: 0 !important;
			padding: 0 !important;
			padding-inline: 0 !important;
			overflow: hidden !important;
		}

		.reveal {
			margin-block: 0 !important;
		}
	}
</style>
