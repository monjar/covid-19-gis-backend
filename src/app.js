const express = require("express");
const configApp = require("./config/app-config");

const port = process.env.PORT;
const app = express();
configApp(app);

app.listen(port, () => console.log(`listening on port ${port}!`));
