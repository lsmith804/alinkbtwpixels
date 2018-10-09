const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
var logger = require("morgan");
var cheerio = require("cheerio");
const Discord = require("discord.js");
require('dotenv').config()
const token = process.env.DISCORD_BOT_SECRET;
const connection = require("./connection");


//Commando Bot -Deprecated
//const commando = require("discord.js-commando");

//DiscordBOT
const bot = new Discord.Client();
bot.on('message', (message) => {
 if (message.content == "Hello"){
   message.reply("My name is Connor, I'm the android sent by Cyberlife."); 
   //TO reply simply w/o the Mention
   //message.channel.sendMessage("pong2");
 }
});

bot.on('ready', () => {
  console.log('ConnorBOT is alive!');
  bot.user.setActivity('DBH');
});

bot.login(token);

///////////////////////////////////////

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
app.get("/profiles/all", function(req, res){
  connection.query("SELECT * FROM userProfile", function(err, result){
    if (err) console.log ("couldnt get the profiles!");
    res.json({ data: result });
    console.log(res);
  });
});

//Use form to register OR implement discord sign up?
app.post("/register", function(req,res){
  var newUser = req.body;
  console.log("New User: " + newUser);

  connection.query(
    "INSERT INTO userProfile SET ?",
    {
      name: "Test New User",
      username: "TesterMe",
      favoriteGame: "Some Game!",
      aboutMe: "I love testing!",
      photo: "http://i.ytimg.com/vi/SKRWhJv0C_s/mqdefault.jpg"
    },
    function(err,res){
      console.log("Member added!");
    }
  );
});



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
});

