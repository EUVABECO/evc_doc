import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://euvabeco.github.io',
	base: 'evc_doc',
	integrations: [
		starlight({
			title: 'EVC Docs',
			social: {
				rss:'https://euvabeco.eu/news/',
			},
			sidebar: [
				{
					label: "Introduction",
					autogenerate: { directory: 'introduction' }
				},
				{
					label: 'Specifications',
					autogenerate: { directory: 'specifications' }
				},
				{
					label: 'Implementation',
					autogenerate: { directory: 'implementation' },
				},
			],
			defaultLocale: 'root',
			locales: {
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },
				fr: {
					label: 'Français',
					lang: 'fr',
				},
			},
		}),
	],
});
