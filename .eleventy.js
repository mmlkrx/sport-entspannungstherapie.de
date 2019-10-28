module.exports = function(config) {
  config.addPassthroughCopy("images"); // pass images folder right through to output folder
  config.addPassthroughCopy("admin"); // pass admin folder right through to output folder
  return {
    dir: {
      input: ".",
      output: "_site"
    },
    templateFormats: ["njk"]
  };
};
