module.exports = function (eleventyConfig) {
  // Copy `assets` folder, robots.txt, and favicon.ico to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "./src/favicon.ico": "favicon.ico" });

  // Watch for changes in the `assets` folder
  eleventyConfig.addWatchTarget("src/assets");

  // Set layout for pages
  eleventyConfig.addLayoutAlias("default", "base.njk");

  // Add filters
  eleventyConfig.addFilter("date", (dateObj) => {
    return dateObj.toLocaleDateString();
  });

  // Add shortcodes
  eleventyConfig.addShortcode("currentYear", () => {
    return new Date().getFullYear();
  });

  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
