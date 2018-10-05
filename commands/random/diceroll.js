const commando = require("discord.js-commando");

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "roll",
            group: "random",
            memberName: "roll",
            description: "rolls a di!",
            examples: ['roll']
        });
    }
    async run(msg){
        return msg.say("hellooo");
    }

};

module.exports = DiceRollCommand;