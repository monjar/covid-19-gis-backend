const winston = require("winston");
const turf = require("@turf/turf");
const repository = require("../repository/gis-repository");

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "Service.log" })
  ]
});

const filterPolygonsByPoint = point => {
  return polygon => {
    if (turf.inside(point, polygon)) return polygon.properties.name;
  };
};

const notNull = element => {
  return element != null;
};

const searchForSuitedPolygons = point => {
  const polys = repository.getAllPolygons();
  const turfPoint = turf.point(point);
  return polys.map(filterPolygonsByPoint(turfPoint)).filter(notNull);
};

const testPoint = point => {
  const insidePolys = searchForSuitedPolygons(point);
  logger.info(insidePolys);
  return insidePolys;
};

const addPolygon = polygon => {
  repository.addPolygon(polygon);
};

module.exports = {
  testPoint: testPoint,
  addPolygon: addPolygon
};
