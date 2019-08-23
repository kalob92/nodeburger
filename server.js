const express = require('express');
const exphbs = require('express-handlebars');

// express
const app = express();
const PORT = process.env.PORT || 3001;

// Models and Routes
const db = require('./models');

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
