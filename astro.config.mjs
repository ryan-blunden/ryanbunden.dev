import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://ryanblunden.tech',
  integrations: [
    starlight({
      title: 'Ryan Blunden',
      social: {
        linkedin: 'https://www.linkedin.com/in/ryanblunden/',
        github: 'https://github.com/ryan-blunden',
        email: 'mailto:ryan.blunden@gmail.com',
      },
      customCss: ['./src/styles/tailwind.css', './src/styles/custom.css'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
