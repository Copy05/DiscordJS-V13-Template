const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eval')
		.setDescription('evaluates a string (javascript)')
        .addStringOption(option =>
            option.setName('eval')
                .setDescription('The input to evaluate (javascript)')
                .setRequired(true)),
	async execute(interaction, client) {

        const string = interaction.options.getString('eval');
        const evaluatedstr = "```js\n" + eval(string) + "```"

        let evalembed = new MessageEmbed()
        .setTitle("Output:")
        .setColor("#3083ff")
        .setDescription(evaluatedstr);

        if (interaction.user.id === 'BOTDEVELOPER ID HERE') {
            try {
                await interaction.reply({ embeds: [evalembed] });
            } catch (error) {
                await interaction.reply(error);
            }
        }

        
}
}