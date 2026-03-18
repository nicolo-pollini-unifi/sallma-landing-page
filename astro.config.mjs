import { env } from 'node:process';

// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import node from '@astrojs/node';

const isVercel = !!(
  env.VERCEL === '1' ||
  env.VERCEL === 'true' ||
  env.VERCEL_URL ||
  env.NOW_BUILDER
);

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: isVercel ? vercel() : node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    keystatic()
  ]
});