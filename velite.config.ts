import { defineConfig, s } from 'velite'

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
  collections: {
    pages: {
      name: 'Page', // collection type name
      pattern: 'pages/**/*.mdx', // content files glob pattern
      schema: s
        .object({
          title: s.string().max(99), // Zod primitive type
          description: s.string().max(200),
          slug: s.path(), // auto generate slug from file path
          metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
          code: s.mdx()
        })
    },
  }
})