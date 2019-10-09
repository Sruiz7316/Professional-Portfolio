const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Define a port to listen for incoming requests
const PORT = process.env.PORT || 3000;

// Makes code readable//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

module.exports = app;