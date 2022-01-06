//const { MessageEmbed } = require('discord.js');
const responses = ["Processing command", "Sending request", "Searching database", "Translating response", "Preparing printer"]

const asciiArt  =[  "┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼█┼█┼█┼█┼█┼█┼█┼█┼█",
                    "┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼█┼█████████████████┼█",
                    "┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼█┼█████████████████████┼█",
                    "┼┼┼┼┼┼┼┼┼┼┼┼┼█┼█████████████████████████┼█",
                    "┼┼┼┼┼┼┼┼┼┼┼┼┼█████████████████████████████┼█",
                    "┼┼┼┼┼┼┼┼┼┼┼█████████████████████████████████",
                    "┼┼┼┼┼┼┼┼┼┼┼┼███████████████████████████████┼",
                    "┼┼┼┼┼┼┼┼┼┼███████████████████████████████████",
                    "┼┼┼┼┼┼┼┼┼┼┼█████████████████████████████████┼",
                    "┼┼┼┼┼┼┼┼┼█████████████████████████████████████",
                    "┼┼┼┼┼┼┼┼┼┼███████████████████████████████████┼",
                    "┼┼┼┼┼┼┼┼███████████████████████████████████████",
                    "┼┼┼┼┼┼┼┼┼█████████████████████████████████████┼",
                    "┼┼┼┼┼┼┼┼┼┼▒▒███████████████████████████████████",
                    "┼┼┼┼┼┼┼┼┼▒▒▒▒█████████████████████████████████┼",
                    "┼┼┼┼┼┼┼┼▒▒░░▒██████████████████████████████████",
                    "██┼┼┼┼▒▒▒▓▓░▒▒████████████████████████████████┼",
                    "██▒▒▒▒▒▒▒█▓▒▒▒█████████████████████████████████",
                    "┼▒▒▒▒▒▒▒▒▒▒▒▒▒▒███████████████████████████████┼",
                    "┼┼▒▒▒▒▒▒▒▒▒▒░░▒▒█████████████████████████████┼",
                    "┼┼┼▒▒▒▒▒▒▒▒░░░░▒▒█████████████████████████████",
                    "┼┼┼┼▒▒▒▒▒▒▒░░░░▒▒███████████████████████████┼",
                    "┼┼┼┼┼▒▒▒▒▒▒▒░░▒▒▒████████████████████████████",
                    "┼┼┼┼┼┼┼▒▒█▒▒▒▒▒▒█████████████████████████",
                    "┼┼┼┼┼┼┼┼┼┼▒▒▒▒┼┼┼┼▒▒█▒█████████████▒▒█▒┼██┼",
                    "┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼▒▒▒▒▒▒▒█┼█┼███┼█┼▒▒▒▒▒▒▒┼┼",
                    "┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼▒▒▒▒▒▒┼┼┼┼┼┼┼┼┼┼┼▒▒▒▒▒▒┼┼"]



module.exports = async function(msg, args, self){

    let delay_dot = 100;
    let delay = 1000;
    let dots = 10;

    /*
    const answerEmbed = new MessageEmbed()
	    .setColor('#0099ff')
	    .setTitle('Answer');
    */
    if(!self){
        //Send first response
        msg.channel.send(responses[0]);
    }
    
    else{
        //Edit self sent message
        
        for(i = 1; i < responses.length; i++){
            
            for(j = 0; j < dots; j++){
                await msg.edit(msg.content + ".");
                wait(delay_dot);
            }
            
            //answerEmbed.description = responses[i];
            await msg.edit(responses[i]);
            wait(delay);
            
        }
        
        for(j = 0; j < dots; j++){
            await msg.edit(msg.content + ".");
            wait(delay_dot);
            
        }
        wait(delay);
        
        //Print ascii
        await msg.edit(asciiArt[0]);
        for(i = 1; i < asciiArt.length; i++){
            
            await msg.edit(msg.content + "\n" + asciiArt[i]);
            wait(200);
        }
        //Completed msg
        await msg.edit(msg.content + "\n" + "Printing completed with: 0 errors. Command Done");
        
    }

    async function wait(t){
        await new Promise(resolve => setTimeout(resolve, t));
    }
    
};




