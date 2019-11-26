module.exports = function(config) {
  config.addPassthroughCopy("site/images"); // pass images folder right through to output folder
  config.addPassthroughCopy("site/admin"); // pass admin folder right through to output folder
  config.addPassthroughCopy("site/js"); // pass js folder right through to output folder

  // returns array of collection objects that should be displayed (show: true)
  config.addCollection("visibleAnnouncements", function(collection) {
    return collection.getAll().filter(function(item) {
      if (item.data.show == true) {
        return item;
      }
    });
  });

  return {
    dir: {
      input: "site",
      output: "_site",
      layouts: "layouts"
    },
    templateFormats: ["njk", "md"]
  };
};
