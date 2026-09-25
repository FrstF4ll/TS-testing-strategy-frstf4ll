import {defineConfig} from "@playwright/test";

const baseURL = 'http://localhost:5173'

export default defineConfig({
    testDir: './e2e',
    use: { baseURL: baseURL },
webServer: [
        { command: 'pnpm dev:server', url: 'http://localhost:3000/health', reuseExistingServer: true },
        { command: 'pnpm dev', url: baseURL, reuseExistingServer: true },
    ],
})
