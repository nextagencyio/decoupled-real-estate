import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:3777',
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: 'NODE_TLS_REJECT_UNAUTHORIZED=0 npx next start -p 3777',
    port: 3777,
    timeout: 30000,
    reuseExistingServer: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
})
