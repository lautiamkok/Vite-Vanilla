// windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  // https://windicss.org/guide/extractions.html#scanning
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      './**/index.html',
      'src/**/*.{vue,html,jsx,tsx}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
})
