import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltemark from './src/lib/sveltemark/index.js';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter(),
			extensions: ['.svelte', '.md'],
			preprocess: [sveltemark(), vitePreprocess()],
			compilerOptions: {
				experimental: {
					async: true
				},
				warningFilter: (warning) => warning.code !== 'a11y_no_noninteractive_tabindex'
			},
			experimental: {
				remoteFunctions: true
			}
		})
	]
});
