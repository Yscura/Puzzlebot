
require("dotenv").config();

//Connect to Discord
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login(process.env.BOTTOKEN);

client.once("ready", connectedDiscord);


function connectedDiscord(){
    console.log("Connected");
}

//Import Cmd-handler
const commandHandler = require("./commands");
client.on("messageCreate", commandHandler);

