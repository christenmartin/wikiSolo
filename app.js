const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");

//
// app.use(express.static("__dirname", "/public"));

const env = nunjucks.configure("views", {noCache: true});

app.set("view engine", "html");

app.engine("html", nunjucks.render);


app.get('/', function (req, res, next) {
  res.send("hi hi");
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
