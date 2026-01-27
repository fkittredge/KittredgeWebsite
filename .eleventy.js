const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Date filter for ISO format (for datetime attribute)
  eleventyConfig.addFilter("dateISO", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISO();
  });

  // Date filter for display format (e.g., "January 15, 2025")
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("MMMM d, yyyy");
  });

  // Create a collection of all insights, sorted by date (newest first)
  eleventyConfig.addCollection("insights", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/insights/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Calculate reading time based on word count
  eleventyConfig.addFilter("readingTime", (text) => {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
