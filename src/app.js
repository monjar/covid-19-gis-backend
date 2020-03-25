const express = require("express");
const bodyParser = require("body-parser");
const gisRouter = require("./routers/gis-controller");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use("/gis", gisRouter);

app.listen(port, () => console.log(`listening on port ${port}!`));
