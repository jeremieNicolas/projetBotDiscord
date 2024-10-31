const { SlashCommandBuilder } = require(discord.js)

//Export
module.exports = {
    data: new SlashCommandBuilder()
        .setName('raid')
        .setDescription('Crée un événement de raid.'),

    async execute(interaction)
    {
        
    }

};

/*const { SlashCommandBuilder } = require('discord.js')
//Export de la commande dans le bot.
module.exports = {
    data: new SlashCommandBuilder()
        .setName('Ping')
        .setDescription('Replies with pong!'),
    async execute(interaction)
    {
        await interaction.reply("Pong!");
    }
};*/