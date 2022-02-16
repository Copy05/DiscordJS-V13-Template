const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('replys with a test message'),
	async execute(interaction, client) {
		await interaction.reply({ content: "It works!"})
    }
}