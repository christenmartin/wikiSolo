const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");

//

const app = express();

//syncs it up so Node can find things in your file structure to render when you use them
const env = nunjucks.configure("views", {noCache: true});
app.set("view engine", "html");
app.engine("html", nunjucks.render);
app.use(express.static(__dirname +  "/public"));

//logger
app.use(morgan("dev"));

//parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());





app.get('/', function (req, res, next) {
  res.render("index");
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
