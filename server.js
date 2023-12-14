const express = require("express");
const app = require("./app");

require("dotenv").config();

const port = process.env.PORT || 3000;
const hostname =
  process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0";

app.listen(port, hostname, () => {
  console.log(`Server is online: http://${hostname}:${port}`);
});
