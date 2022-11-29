const { Client, GatewayIntentBits } = require("discord.js")
require('dotenv').config()


const client =  new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', ()=>{
    console.log(`Logged in as ${client.user.tag}`)
});
client.on('messageCreate', (message) => {
    if (message.content == 'hi'){
        message.reply('Hello world!')
    }
    if (message.author.bot) return false; 
    console.log(`Message from ${message.author.username}: ${message}`);
})

client.login(process.env.TOKEN)