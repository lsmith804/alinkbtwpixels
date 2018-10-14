const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
require('dotenv').config()
const PORT = process.env.PORT || 3001;
var logger = require("morgan");
var request = require("request");
const connection = require("./connection");

const Discord = require("discord.js");
const token = process.env.DISCORD_BOT_SECRET;
const reply = require("./reply.json");

const igdb = require('igdb-api-node').default;
const IGDB_KEY = process.env.IGDB_SECRET;

const JSON = require('circular-json');
//const WIT_KEY = process.env.WIT_KEY;
//const witai = new Wit ({ accessToken: WIT_KEY })



//Commando Bot -Deprecated
//const commando = require("discord.js-commando");

//DiscordBOT
const bot = new Discord.Client();

// bot.on('message', (message) => {
//  if (message.content == "Hello"){
//    message.reply("My name is Connor, I'm the android sent by Cyberlife."); 
//  }
// });

bot.on('message', (message) => {
  message.content.split(" ");
  
  message.content = message.content.toLowerCase().concat(); //Ignore case & lower
  if (message.author.bot){  //Prevent bot from talking to himself
    return;
  }
  if (reply[message.content]){
    message.channel.send(reply[message.content]); 
  }else{
    var messagesplit = message.content.split(" ")

    for (var i = 0; i < messagesplit.length; i++){
    if (messagesplit[i] === (reply[message.content]) ||
      messagesplit[i] === ("what?") ||
      messagesplit[i] === ("wut?")) {
        message.channel.send("LOL WHO KNOWS?");  
      }
    }
  }
 });

bot.on('ready', () => {
  console.log('ConnorBOT is alive!');
  bot.user.setActivity('DBH');
});

bot.login(token);


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

//API ROUTES
//Usersubmitted entry profiles
app.get("/profiles/all", function(req, res){
  connection.query("SELECT * FROM userprofile", function(err, result){
    if (err) console.log ("couldnt get the profiles!");
    res.json({ data: result });
    const json = JSON.stringify(res.json);
    console.log(json);
  });
});

//Get popular games from IGDB
app.get("/populargames", (req,res) => {

  axios.get("https://api-endpoint.igdb.com/games/?fields=name,popularity&order=popularity:desc", {
    headers: {
      "user-key": IGDB_KEY,
      Accept: "application/json"
    }
  })
  .then(response => {
    //console.log(response.data);
    res.json(response.data);  //Peep in browser @ 3001/populargames
  })
  .catch(e => {
    console.log("error", e);
  });
});

//Route for posting new entrirs to mystery/theory DB
app.post("/register", function(req,res){
  var newSubject = req.body.subject;
  var newUsername = req.body.username;
  var newGame = req.body.game;
  var newEntry = req.body.entry;
  var newPhoto = req.body.photo;

  connection.query(
    "INSERT INTO userProfile SET ?",
    {
      subject: newSubject,
      username: newUsername,
      game: newGame,
      entry: newEntry,
      photo: newPhoto
    },
    function(err, queryResult) {
      if(!!err){
        console.log(err);
        res.send(err);
        return
      }
      console.log(queryResult);
      console.log("success!!!!!");
      res.json(queryResult);
    }
    );
});

app.get("/list", (req,res) => {
  var menu = ["item1", "item2", "item3"];
  res.json(menu);
});



// Send every other request to the React app & define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

