import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ '_src/css': 'static/css' });
	eleventyConfig.addPassthroughCopy({ '_src/files': 'static/files' });
	eleventyConfig.addPassthroughCopy({ '_src/fonts': 'static/fonts' });
	eleventyConfig.addPassthroughCopy({ '_src/icons': 'static/icons' });
	eleventyConfig.addPassthroughCopy({ '_src/img': 'static/img' });
	eleventyConfig.addPassthroughCopy({ '_src/js': 'static/js' });

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
