const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', (message) => {

    if (message.author.bot) return
    else {
        message.reply(`Hello ,how are You?`)
    }

});

//interaction
client.on('interactionCreate', (interact) => {
    interact.reply("pong 🔥");
})

client.login('MTA4MzM5NzM1MDEwNzY1MjIzNw.Gs_nzL.obEY4T-iO0tw4vc5n2GZjEJgkcBtYXPN51L_ws')