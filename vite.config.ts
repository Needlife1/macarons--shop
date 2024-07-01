// import { defineConfig } from 'vite';
// import { fileURLToPath } from 'url';
// import viteImagemin from 'vite-plugin-imagemin';
// import postcssConfig from './postcss.config.ts';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';
// import glob from 'fast-glob';

// const urlToPath = (url) => fileURLToPath(new URL(url));

// export default defineConfig({
//   base: './',
//   plugins: [
//     viteImagemin({
//       gifsicle: { optimizationLevel: 7, interlaced: false },
//       optipng: { optimizationLevel: 7 },
//       pngquant: { quality: [0.65, 0.8], speed: 4 },
//       mozjpeg: { quality: 75 },
//       svgo: {
//         plugins: [{ removeViewBox: false }, { removeEmptyAttrs: false }],
//       },
//       webp: { quality: 75 },
//     }),
//     injectHTML(),
//     FullReload(['./src/**/**.html', './src/**/*.css']),
//   ],
//   css: {
//     postcss: postcssConfig,
//   },
//   build: {
//     minify: false,
//     rollupOptions: {
//       input: Object.fromEntries(
//         glob
//           .sync(['./*.html', './pages/**/*.html'])
//           .map((file) => [
//             file.slice(0, file.lastIndexOf('.')),
//             urlToPath(new URL(file, import.meta.url)),
//           ]),
//       ),

//       output: {
//         assetFileNames: 'assets/[name].[ext]',
//       },
//     },
//   },
// });

import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import viteImagemin from 'vite-plugin-imagemin';
import postcssConfig from './postcss.config.ts';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import glob from 'fast-glob';

const urlToPath = (url) => fileURLToPath(new URL(url));

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
    injectHTML(),
    FullReload(['./src/**/**.html', './src/**/*.css']),
  ],
  css: {
    postcss: postcssConfig,
  },
  build: {
    minify: false,
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(['./*.html', './pages/**/*.html'])
          .map((file) => [
            file.slice(0, file.lastIndexOf('.')),
            urlToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
