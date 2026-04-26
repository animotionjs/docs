import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltemark from './src/lib/sveltemark/index.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [sveltemark(), vitePreprocess()],
	compilerOptions: {
		experimental: {
			async: true
		},
		warningFilter: (warning) => warning.code !== 'a11y_no_noninteractive_tabindex'
	},
	kit: {
		adapter: adapter(),
		experimental: {
			remoteFunctions: true
		}
	}
};

export default config;
