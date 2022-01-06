
const answer = require("./commands/answer.js");
const test = require("./commands/test.js");

const self = 927356222691237898;
const commands = {answer, test};

module.exports = async function (msg){
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if(command.charAt(0) === "!"){
        //Valid command
        command = command.substring(1);
        if (command in commands){
            commands[command](msg, tokens, false);
        }
    }
    else if(msg.author.id == self){
        //if(msg.embeds[0].title == "Answer"){
            answer(msg, tokens, true);
        //}
        
    }
    
};