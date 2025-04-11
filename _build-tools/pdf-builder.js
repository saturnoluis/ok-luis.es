import { test, expect } from '@playwright/test';

test.describe('Generate pdf documents', () => {
	test(`Generate pdf file: Luis-Saturno_cv_es.pdf`, async ({ page }) => {
		await page.goto('/cv');

		const name = page.getByText('Luis Saturno');
		await expect(name).toBeVisible();

		const title = page.getByText(
			'Desarrollador Frontend Senior e Ingeniero en Software',
		);
		await expect(title).toBeVisible();

		await page.pdf({
			path: `_static/files/Luis-Saturno_cv_es.pdf`,
			width: '210mm',
			height: '297mm',
			margin: {
				top: '35mm',
				bottom: '15mm',
				left: '0mm',
				right: '0mm',
			},
			printBackground: true,
		});
	});

	test(`Generate pdf file: Luis-Saturno_cv_en.pdf`, async ({ page }) => {
		await page.goto('/cv/en');

		const name = page.getByText('Luis Saturno');
		await expect(name).toBeVisible();

		const title = page.getByText(
			'Senior Frontend Developer & Software Engineer',
		);
		await expect(title).toBeVisible();

		await page.pdf({
			path: `_static/files/Luis-Saturno_cv_en.pdf`,
			width: '210mm',
			height: '297mm',
			margin: {
				top: '35mm',
				bottom: '15mm',
				left: '0mm',
				right: '0mm',
			},
			printBackground: true,
		});
	});
});
