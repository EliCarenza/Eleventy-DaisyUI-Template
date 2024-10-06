const json5 = require("json5");
const tailwindConfig = require("./tailwind.config.cjs");
const dateFilter = require("nunjucks-date-filter");

module.exports = function (eleventyConfig) {
  // Copy `assets` folder, robots.txt, and favicon.ico to output
  function addPassthroughs(config) {
    config.addPassthroughCopy("src/assets");
    config.addPassthroughCopy("src/robots.txt");
    config.addPassthroughCopy("src/favicon.ico");
  }

  // Watch for changes in the `assets` folder
  eleventyConfig.addWatchTarget("src/assets");

  // Set layout for pages
  eleventyConfig.addLayoutAlias("default", "base.njk");

  // Add a custom data file extension handler for JSON5
  eleventyConfig.addDataExtension("json5", (contents) => json5.parse(contents));

  // Function to add global data
  function addGlobalData(config) {
    config.addGlobalData("themes", tailwindConfig.daisyui.themes);
  }

  // Add blog data collection
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  // Add filters
  eleventyConfig.addFilter("date", dateFilter);

  // Add shortcodes
  eleventyConfig.addShortcode("currentYear", () => {
    return new Date().getFullYear();
  });

  // Add passthroughs, global data
  addPassthroughs(eleventyConfig);
  addGlobalData(eleventyConfig);

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