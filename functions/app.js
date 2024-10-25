// netlify/functions/app.js
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../../views'));

// Serve static files
app.use(express.static(path.join(__dirname, '../../public')));

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: 'My Express EJS App' });
});

// Serverless handler
module.exports.handler = serverless(app);
