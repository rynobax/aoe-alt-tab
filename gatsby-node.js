require("source-map-support").install();
require("ts-node").register();
const express = require("express");

const { createWiki } = require("./sources/wiki/wiki");

exports.sourceNodes = async (stuff) => {
  createWiki(stuff);
};
