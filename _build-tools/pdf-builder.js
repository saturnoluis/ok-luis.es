import { test, expect } from '@playwright/test';

const files = [
	{
		input: '/cv',
		output: 'Luis-Saturno_cv_es.pdf',
	},
	{
		input: '/cv/en',
		output: 'Luis-Saturno_cv_en.pdf',
	},
];

for (const file of files) {
	test(`Generate pdf file: ${file.output}`, async ({ page }) => {
		await page.goto(file.input);

		const title = await page.title();
		expect(title).toBe(file.output);

		const name = page.getByText('Luis Saturno');
		await expect(name).toBeVisible();

		await page.pdf({
			path: `_static/files/${file.output}`,
			width: '210mm',
			height: '210mm',
			margin: {
				top: '25mm',
				bottom: '15mm',
				left: '0mm',
				right: '0mm',
			},
			printBackground: true,
		});
	});
}
