// require('dotenv').config();
// import { dotenv } from "dotenv";
// const { Client, GatewayIntentBits } = require('discord.js');
import { Client, GatewayIntentBits } from "discord.js";
// const ChatGPT = require('discord-chat-gpt');
import { ChatGPT } from "discord-chat-gpt";

//creating client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    allowedMentions: {
        repliedUser: false, //it will not ping uh in rply
    }
});

const gptClient = new ChatGPT({
    apiKey: "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",
    orgKey: "org-JepqB7j88NHXVQPW69r1gy5O",

});
//checking  if bot is online console bot is online

client.on("ready", () => {
    console.log(`> ${client.user.username} is  Online 😊 !`)
});


// handle chat bot system
client.on("messageCreate", async(message) => {
    if (!message.guild || message.author.bot) return;
    let ChannelID = "1089601780175880222";
    let channel = message.guild.channels.cache.get(ChannelID);
    if (!channel) return;
    if (message.channel.id === channel.id) {
        let msg = await message.reply({
            content: "लोड हो रहा है कृपया प्रतीक्षा करें"
        })
        let reply = await gptClient.chat(message.content, message.author.username);
        msg.edit({
            content: `${reply}`,
        });
    }
});
//new login in bot
client.login('MTA4MzM5NzM1MDEwNzY1MjIzNw.GcP6mn.6DvBLdHWesx9ftNMNz0Nto33OVdDJwTEpslxjU');