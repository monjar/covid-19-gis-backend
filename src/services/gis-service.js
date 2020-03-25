const winston = require("winston");
const repository = require("../repository/gis-repository");
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" })
  ]
});

const testPoint = point => {
  let polys = repository.getAllPolygons();
  logger.info(polys);
};

const addPolygon = polygon => {
  repository.addPolygon(polygon);
};

module.exports = {
  testPoint: testPoint,
  addPolygon: addPolygon
};
