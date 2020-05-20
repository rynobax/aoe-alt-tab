require("source-map-support").install();
require("ts-node").register();

const { createWiki } = require("./sources/wiki/wiki");

exports.sourceNodes = (stuff) => {
  createWiki(stuff);
};
