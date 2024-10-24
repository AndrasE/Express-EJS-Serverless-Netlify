// requiring modules //
const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");


// ejs,bodyParser,css-public //
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res) {
  res.render("index", {
  });
});


//local + heroku/cyclic//
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started succesfully");
});
