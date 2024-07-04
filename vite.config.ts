// noinspection JSUnusedGlobalSymbols

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import Sitemap from 'vite-plugin-sitemap'
import {RobotOption} from 'sitemap-ts'
import path from "path"

const robotConfig: RobotOption[] = [{userAgent: '*', allow: '/'}]

export default defineConfig({
    plugins: [react(), Sitemap({
        hostname: 'https://kadenfrisk.com/', robots: robotConfig,
    })], resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    }, base: './',
})
