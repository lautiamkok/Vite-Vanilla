import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue(),
  ],

  // Vite does not support alias in html files.
  // https://github.com/vitejs/vite/issues/3000
  resolve: {
    alias: {
      // Remove this line on production.
      vue: 'vue/dist/vue.esm-bundler',

      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, './src'),
    },
  },

  // Build muliple pages.
  // https://vitejs.dev/guide/build.html#multi-page-app
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        slots: resolve(__dirname, 'slots/index.html'),
        states: resolve(__dirname, 'states/index.html')
      }
    }
  }
}
