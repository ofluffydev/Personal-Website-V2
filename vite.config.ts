// noinspection JSUnusedGlobalSymbols

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import Sitemap from 'vite-plugin-sitemap'
import {RobotOption} from 'sitemap-ts'

const robotConfig: RobotOption[] = [{userAgent: '*', allow: '/'}]

export default defineConfig({
    plugins: [
        react(),
        Sitemap({
            hostname: 'https://localhost:5173/',
            robots: robotConfig,
        })
    ],
    base: './',
})
