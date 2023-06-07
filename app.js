// Setup Modules
var express = require("express"),
  app = express();

// App Configurations
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Setup Route
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Listen
app.listen(process.env.PORT || 4000);
