import { test, expect } from '@playwright/test';

test('Generate the PDF files for my CV', async ({ page }) => {
	await page.goto('/cv/en/');

	const button = page.getByRole('link', { name: 'Ver en Español' });

	await expect(button).toBeVisible();

	await page.pdf({
		path: '_static/files/Luis-Saturno_cv_en.pdf',
		format: 'A4',
		margin: {
			top: '20mm',
			bottom: '20mm',
			left: '15mm',
			right: '15mm'
		},
		printBackground: true,
	});
});
