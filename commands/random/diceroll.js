const commando = require("discord.js-commando");

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "roll",
            group: "random",
            memberName: "roll",
            description: "rolls a di!"
        });
    }
    async run(message, args) { //this is called every time some activates the command
        var roll = Math.floor(Math.random() * 6) + 1; //Rolls a 6 sided 
        message.reply("You rolled a " + roll);
        message.channel.sendMessage("pong2");
    }

}

module.exports = DiceRollCommand;