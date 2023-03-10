import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
//import autoImport from 'sveltekit-autoimport';

export default defineConfig({
	plugins: [
		  sveltekit()
	]
});

/*
autoImport({
	components: [
		'./src/components',
	],
}),
*/