const express = require("express");
const app = express();
const routes = require("./src/routes/index");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Gunakan rute yang telah dikonfigurasi
app.use(routes);

module.exports = app;
