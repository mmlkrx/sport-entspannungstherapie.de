module.exports = function(config) {
  config.addPassthroughCopy("site/images"); // pass images folder right through to output folder
  config.addPassthroughCopy("site/admin"); // pass admin folder right through to output folder
  config.addPassthroughCopy("site/js"); // pass js folder right through to output folder
  return {
    dir: {
      input: "site",
      output: "_site"
    },
    templateFormats: ["njk"]
  };
};
