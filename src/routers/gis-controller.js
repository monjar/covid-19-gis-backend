const express = require("express");
const service = require("../services/gis-service");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  next();
});

router.get("/testpoint", function(req, res) {
  service.testPoint(req.query);
  res.send(req.query);
});

router.put("/addpolygon", function(req, res) {
  service.addPolygon(req.body);
  res.send(JSON.stringify(req.body));
});

module.exports = router;
