import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './_build-tools',
	testMatch: ['**/*.js'],
	use: {
		baseURL: 'http://127.0.0.1:8080',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
	webServer: {
		command: 'npm run build && npm run serve',
		url: 'http://127.0.0.1:8080',
	},
});
