const [Client, GatewayIntentBits] = require('discord.js')

const client = new Client({
    //Permissions du bot
    Intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.messageContent
    ],
});

Client.on("ready", () => {
    console.log(`Bot logged in as ${client.user.username}!`);
});

client.login("")