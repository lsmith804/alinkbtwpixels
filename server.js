const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const mongojs = require("mongojs");
var logger = require("morgan");


//Initialize express
const app = express();

//Logger for logging HTTP requests.
app.use(logger("dev"));


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//MONGO DB Config
var databaseUrl = "cpsites";
var collections = ["notes"];

var db = mongojs(databaseUrl, collections);

//Should they happen, log mongo errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});




// Define API routes here



app.get("/api/getList", (req,res) => {
  var menu = ["item1", "item2", "item3"];
  res.json(menu);
  console.log("Main welcome menu loaded!");
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
