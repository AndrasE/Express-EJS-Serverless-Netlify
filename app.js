const express = require("express");
const path = require("path");
const app = express();

// Set views directory and engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "../../views"));

// Static file serving
app.use(express.static(path.join(__dirname, "../../public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

module.exports = app;
