
// File: keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

const isDev = import.meta.env.DEV;

export default config({
  storage: isDev
    ? { kind: 'local' }
    : {
      kind: 'github',
      repo: 'nicolo-pollini-unifi/sallma-landing-page'
    },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        summary: fields.text({ label: 'Summary' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    docs: collection({
      label: 'Documentation',
      slugField: 'title',
      path: 'src/content/docs/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Getting Started', value: 'getting-started' },
            { label: 'Architecture', value: 'architecture' },
            { label: 'API Reference', value: 'api' },
            { label: 'Tutorials', value: 'tutorials' },
          ],
          defaultValue: 'getting-started',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
