// Requiring modules
const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Default port

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define route to render your main page
app.get("/", (req, res) => {
  res.render("index");
});

// Catch-all route to handle all other paths (404 page)
app.get('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

// Define a path for serverless functions in Netlify
app.use('/api', (req, res) => {
  res.send("Serverless function is active!");
});

// Export serverless handler for Netlify
module.exports.handler = serverless(app);
