const json5 = require("json5");
const tailwindConfig = require("./tailwind.config.cjs");
const dateFilter = require("nunjucks-date-filter");

const ASSETS_PATH = "src/assets";
const ROBOTS_TXT_PATH = "src/robots.txt";
const FAVICON_PATH = "src/favicon.ico";

function addPassthroughs(config) {
  config.addPassthroughCopy(ASSETS_PATH);
  config.addPassthroughCopy(ROBOTS_TXT_PATH);
  config.addPassthroughCopy(FAVICON_PATH);
}

function addGlobalData(config) {
  config.addGlobalData("themes", tailwindConfig.daisyui.themes);
}

module.exports = function (eleventyConfig) {
  // Watch for changes in the `assets` folder
  eleventyConfig.addWatchTarget(ASSETS_PATH);

  // Set layout for pages
  eleventyConfig.addLayoutAlias("default", "base.njk");

  // Add a custom data file extension handler for JSON5
  eleventyConfig.addDataExtension("json5", (contents) => json5.parse(contents));

  // Add blog data collection
  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  // Add filters
  eleventyConfig.addFilter("date", dateFilter);

  // Add shortcodes
  eleventyConfig.addShortcode("currentYear", () => new Date().getFullYear());

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