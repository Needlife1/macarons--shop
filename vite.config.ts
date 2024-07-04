import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import postcssConfig from './postcss.config.ts';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import fg from 'fast-glob';

export default defineConfig(({ command }) => {
  return {
    define: {
      ...{
        [command === 'serve' ? 'global' : '_global']: {},
      },
    },
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
        input: fg
          .sync(['./*.html', './src/**/*.html'])
          .reduce((entries, file) => {
            const name = file.slice(
              file.lastIndexOf('/') + 1,
              file.lastIndexOf('.'),
            );
            entries[name] = file;
            return entries;
          }, {}),
        output: {
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    },
  };
});
