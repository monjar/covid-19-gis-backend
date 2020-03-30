const bodyParser = require("body-parser");
const gisRouter = require("../routers/gis-controller");
const rootRouter = require("../routers/root-controller");

const configApp = app => {
  app.use(bodyParser.json());
  app.use("/gis", gisRouter);
  app.use("/", rootRouter);
};

module.exports = configApp;
