import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ '_includes/css': 'static/css' });
	eleventyConfig.addPassthroughCopy({ '_includes/files': 'static/files' });
	eleventyConfig.addPassthroughCopy({ '_includes/fonts': 'static/fonts' });
	eleventyConfig.addPassthroughCopy({ '_includes/icons': 'static/icons' });
	eleventyConfig.addPassthroughCopy({ '_includes/img': 'static/img' });
	eleventyConfig.addPassthroughCopy({ '_includes/js': 'static/js' });

	eleventyConfig.addPassthroughCopy('CNAME');
	eleventyConfig.addPassthroughCopy('robots.txt');

	const markdownLib = markdownIt({ html: true }).use(markdownItAttrs);
	eleventyConfig.setLibrary('md', markdownLib);
}

export const config = {
	dir: {
		input: '_content',
		includes: '../_includes',
		output: 'docs',
	},
};
