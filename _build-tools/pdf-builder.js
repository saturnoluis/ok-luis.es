import { test, expect } from '@playwright/test';

const langs = ['en', 'es'];

for (const lang of langs) {
	const filename = `Luis-Saturno_cv_${lang}.pdf`;

	test(`Generate pdf file: ${filename}`, async ({ page }) => {
		await page.goto(`/cv/${lang}/`);

		const title = await page.title();

		expect(title).toBe(filename);

		await page.pdf({
			path: `_static/files/${filename}`,
			width: '210mm',
			height: '210mm',
			margin: {
				top: '25mm',
				bottom: '15mm',
				left: '0mm',
				right: '0mm'
			},
			printBackground: true,
		});
	});
}

