import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ '_static/css': 'static/css' });
	eleventyConfig.addPassthroughCopy({ '_static/files': 'static/files' });
	eleventyConfig.addPassthroughCopy({ '_static/fonts': 'static/fonts' });
	eleventyConfig.addPassthroughCopy({ '_static/icons': 'static/icons' });
	eleventyConfig.addPassthroughCopy({ '_static/img': 'static/img' });
	eleventyConfig.addPassthroughCopy({ '_static/js': 'static/js' });

	eleventyConfig.addPassthroughCopy('CNAME');
	eleventyConfig.addPassthroughCopy('robots.txt');

	const markdownLib = markdownIt({ html: true }).use(markdownItAttrs);
	eleventyConfig.setLibrary("md", markdownLib);
}

export const config = {
	dir: {
		input: "_content",
		includes: "../_includes",
		output: "docs",
	},
};
