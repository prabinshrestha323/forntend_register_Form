const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

//middle ware of handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

const PORT = 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, (req, res) => {
  console.log(`this is Port number ${PORT}`);
});
