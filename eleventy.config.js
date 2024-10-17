const json5 = require("json5");
const tailwindConfig = require("./tailwind.config.cjs");

const ASSETS_PATH = "src/assets";
const ROBOTS_TXT_PATH = "src/robots.txt";
const FAVICON_PATH = "src/favicon.ico";
const BLOG_GLOB = "src/blog/**/*.md";

function addPassthroughs(config) {
  const paths = [ASSETS_PATH, ROBOTS_TXT_PATH, FAVICON_PATH];
  paths.forEach((path) => config.addPassthroughCopy(path));
}

function addGlobalData(config) {
  config.addGlobalData("themes", tailwindConfig.daisyui.themes);
}

function excludeDrafts(item) {
  return !item.data.draft;
}

function isTodayOrPast(item) {
  const today = new Date();
  const postDate = new Date(item.date);
  return postDate <= today;
}

module.exports = function (eleventyConfig) {
  // Watch for changes in the `assets` folder
  eleventyConfig.addWatchTarget(ASSETS_PATH);

  // Set layout for pages
  eleventyConfig.addLayoutAlias("default", "base.njk");

  // Add a custom data file extension handler for JSON5
  eleventyConfig.addDataExtension("json5", (contents) => json5.parse(contents));

  // Add passthroughs
  addPassthroughs(eleventyConfig);

  // Add global data
  addGlobalData(eleventyConfig);

  // Add date filter
  eleventyConfig.addFilter("date", (date) => {
    return new Date(date).toLocaleDateString();
  });

  // Add shortcode for current year
  eleventyConfig.addShortcode("currentYear", () => {
    return new Date().getFullYear();
  });

  // Add blog data collection
  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob(BLOG_GLOB)
      .filter(excludeDrafts)
      .filter(isTodayOrPast);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
