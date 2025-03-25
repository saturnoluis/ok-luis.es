export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('static/fonts');
	eleventyConfig.addPassthroughCopy('static/css');
	eleventyConfig.addPassthroughCopy('static/icons');
	eleventyConfig.addPassthroughCopy('static/js');

	eleventyConfig.addPassthroughCopy('CNAME');
	eleventyConfig.addPassthroughCopy('robots.txt');
}

export const config = {
	dir: {
		input: "content",
		includes: "../_includes",
		output: "docs",
	},
};
