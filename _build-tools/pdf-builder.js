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
}

