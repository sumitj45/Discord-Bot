const { REST, Routes } = require('discord.js');
const commands = [{
    name: 'ping',
    description: 'Replies with Pong!',
}, ];

const rest = new REST({ version: '10' }).setToken('MTA4MzM5NzM1MDEwNzY1MjIzNw.Gs_nzL.obEY4T-iO0tw4vc5n2GZjEJgkcBtYXPN51L_ws');

(async() => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands('1083397350107652237'), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();