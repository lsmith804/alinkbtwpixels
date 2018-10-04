const express = require("express");
const mongojs = require("mongojs");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
var logger = require("morgan");
const mongoose = require("mongoose");
var cheerio = require("cheerio");

//Initialize express
const app = express();

//Logger for logging HTTP requests.
app.use(logger("dev"));


//Body parser handles submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here


app.get("/list", (req,res) => {
  var menu = ["item1", "item2", "item3"];
  res.json(menu);
});



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
 console.log("Hey beautiful."); 
});
