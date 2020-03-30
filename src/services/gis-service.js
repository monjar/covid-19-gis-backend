const turf = require("@turf/turf");
const repository = require("../repository/gis-repository");
const loggerConfig = require("../config/logger-config");

const logger = loggerConfig("service");

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
  return searchForSuitedPolygons(point);
};

const addPolygon = polygon => {
  repository.addPolygon(polygon);
};

module.exports = {
  testPoint: testPoint,
  addPolygon: addPolygon
};
