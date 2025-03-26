export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ '_static/css': 'static/css' });
	eleventyConfig.addPassthroughCopy({ '_static/files': 'static/files' });
	eleventyConfig.addPassthroughCopy({ '_static/fonts': 'static/fonts' });
	eleventyConfig.addPassthroughCopy({ '_static/icons': 'static/icons' });
	eleventyConfig.addPassthroughCopy({ '_static/js': 'static/js' });

	eleventyConfig.addPassthroughCopy('CNAME');
	eleventyConfig.addPassthroughCopy('robots.txt');
}

export const config = {
	dir: {
		input: "_content",
		includes: "../_includes",
		output: "docs",
	},
};
