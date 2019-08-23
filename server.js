const express = require('express');
const exphbs = require('express-handlebars');

// express
const app = express();
const PORT = process.env.PORT || 8080;

// routes
var routes = require("./controllers/burgers_controller.js");

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
require('./controllers/burgers_controller')

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });