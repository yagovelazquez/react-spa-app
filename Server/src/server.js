const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");


 require("./database");
 require("../src/config/config")

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

const port = process.env.PORT || 3003;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
