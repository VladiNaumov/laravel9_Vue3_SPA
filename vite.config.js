import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vuePlugin(),
        laravel({
            input: [
                 'resources/sass/app.scss',
                 'resources/js/src/app.js',
            ],
            refresh: true,
        }),
    ],
});
