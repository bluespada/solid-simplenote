import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
    plugins: [
        solidPlugin(),
    ],
    resolve: {
        alias: {
            "@assets": path.join(__dirname, "./src/assets"),
            "@components": path.join(__dirname, "./src/components"),
            "@routes": path.join(__dirname, "./src/routes"),  
            "@pages": path.join(__dirname, "./src/pages"),
            "@store": path.join(__dirname, "./src/store")
        }
    },
    clearScreen: false,
    server: {
        port: 3000,
    },
});