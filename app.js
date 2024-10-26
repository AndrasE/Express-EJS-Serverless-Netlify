const express = require("express");
const app = express();
const path = require("path");
var favicon = require("serve-favicon");

// Set views directory and engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../views"));

// Static file serving
app.use(express.static(path.join(__dirname, "../../public")));
app.use(favicon(path.join(__dirname, "../../public/images/favicon.ico")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
