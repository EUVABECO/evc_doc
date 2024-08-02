import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				rss:'https://euvabeco.eu/news/',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
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
