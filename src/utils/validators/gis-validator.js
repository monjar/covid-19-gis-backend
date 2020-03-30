const GJV = require("geojson-validation");
const ErrorCreator = require("../ErrorResponseCreator");
const loggerConfig = require("../../config/logger-config");
const logger = loggerConfig("Validator");

const validator = {
  validatePoint: point => {
    return new Promise((resolve, reject) => {
      if (isPointOK(point)) {
        resolve(true);
      } else {
        logger.info("GET testpoint request rejected");
        reject(ErrorCreator.pointReqError());
      }
    });
  },

  validatePolygon: polygon => {
    return new Promise((resolve, reject) => {
      if (isPolygonOK(polygon)) resolve(true);
      else {
        logger.info("PUT addpolygon request rejected");
        reject(ErrorCreator.polygonReqError());
      }
    });
  }
};

const isPointOK = point => {
  return (
    !isNaN(point[0]) && !isNaN(point[1]) && point[0] !== "" && point[1] !== ""
  );
};
const isPolygonOK = polygon => {
  return GJV.isFeature(polygon) && GJV.isPolygon(polygon.geometry);
};

module.exports = validator;
