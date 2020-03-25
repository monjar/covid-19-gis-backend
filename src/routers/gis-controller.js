const express = require("express");
const service = require("../services/gis-service");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  next();
});

router.get("/testpoint", function(req, res) {
  let point = [req.query.long, req.query.lat];
  const response = service.testPoint(point);
  res.send(response);
});

router.put("/addpolygon", function(req, res) {
  service.addPolygon(req.body);
  res.send(JSON.stringify(req.body));
});

module.exports = router;
