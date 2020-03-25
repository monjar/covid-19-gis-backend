const fs = require("fs");

let gisData = require("../../resources/repository.json");

console.log(gisData);

const getAllPolygons = () => {
  return gisData.features;
};

const addPolygon = polygon => {
  gisData.features.push(polygon);
};

module.exports = {
  getAllPolygons: getAllPolygons,
  addPolygon: addPolygon
};
