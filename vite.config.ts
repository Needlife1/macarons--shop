import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import postcssConfig from './postcss.config.ts';

export default defineConfig({
  base: './',
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      mozjpeg: { quality: 75 },
      svgo: {
        plugins: [{ removeViewBox: false }, { removeEmptyAttrs: false }],
      },
      webp: { quality: 75 },
    }),
  ],
  css: {
    postcss: postcssConfig,
  },
});
