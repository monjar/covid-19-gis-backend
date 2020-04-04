const express = require("express");
const service = require("../services/gis-service");
const loggerConfig = require("../config/logger-config");

const logger = loggerConfig("Controller");

const router = express.Router();

const validator = require("../utils/validators/gis-validator");

router.use((req, res, next) => {
  const time = new Date();
  logger.info(
    `${req.protocol} ${req.method} Request to ${req.url} | Time: ${time}`
  );
  next();
});

router.get("/testpoint", (req, res) => {
  let point = [req.query.long, req.query.lat];
  validator
    .validatePoint(point)
    .then((result) => {
      service.testPoint(point);
      res.send(service.testPoint(point));
    })
    .catch((err) => sendError(res, err.message, err.code));
});

router.put("/addpolygon", (req, res) => {
  validator
    .validatePolygon(req.body)
    .then((result) => res.send(service.addPolygon(req.body)))
    .catch((err) => sendError(res, err.message, err.code));
});

const sendError = (res, msg, code) => {
  res.status(code);
  res.send(msg);
};

module.exports = router;
