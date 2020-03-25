const fs = require("fs");

let gisData = require("../../resources/repository.json");

console.log(gisData);

const getAllPolygons = () => {
  return gisData;
};

const addPolygon = polygon => {
  gisData.features.push(polygon);
};

module.exports = {
  getAllPolygons: getAllPolygons,
  addPolygon: addPolygon
};
