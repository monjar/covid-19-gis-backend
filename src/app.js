const express = require("express");
const bodyParser = require("body-parser");
const gisRouter = require("./routers/gis-controller");
const path = require("path");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use("/gis", gisRouter);

app.use(
  "/",
  express.Router().get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/views/index.html"));
  })
);

app.listen(port, () => console.log(`listening on port ${port}!`));
