const express = require("express");
const app = express();
const routes = require("./routes");


 require("./database");
 require("../src/config/config")

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3003;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);


