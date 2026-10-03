import { defineConfig, devices } from "@playwright/test";

const APP = 4120;
const SITE = 3120;

export default defineConfig({
  testDir: "./e2e",
  timeout: 45_000,
  expect: { timeout: 8_000 },
  workers: 1,
  reporter: [["list"]],
  use: { baseURL: `http://localhost:${SITE}`, trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: [
    { command: "node e2e/stub-selfserve.mjs", env: { PORT: String(APP) }, url: `http://localhost:${APP}/search-prospects`, reuseExistingServer: !process.env.CI },
    {
      command: `npx next dev -p ${SITE}`,
      env: { NEXT_PUBLIC_APP_URL: `http://localhost:${APP}` },
      url: `http://localhost:${SITE}`,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
  ],
});
