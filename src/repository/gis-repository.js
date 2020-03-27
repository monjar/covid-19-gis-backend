const winston = require("winston");
const fs = require("fs");
let gisData = require("../../resources/repository.json");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "Repository.log" })
  ]
});

const getAllPolygons = () => {
  return gisData.features;
};

const addPolygon = polygon => {
  gisData.features.push(polygon);
  saveDataToFile();
};

const saveDataToFile = () => {
  logger.debug("writing to file...");
  fs.writeFile("resources/repository.json", JSON.stringify(gisData), error => {
    if (error) logger.error(error);
    else logger.info("gisData wrote on file");
  });
};

module.exports = {
  getAllPolygons: getAllPolygons,
  addPolygon: addPolygon
};
