const { SlashCommandBuilder } = require('discord.js')
//Export de la commande dans le bot.
module.exports = {
    data: new SlashCommandBuilder()
        .setName('Ping')
        .setDescription('Replies with pong!'),
    async execute(interaction)
    {
        await interaction.reply("Pong!");
    }
};