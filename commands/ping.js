const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Shows you the bot ping'),
	async execute(interaction, client) {
		const sent = await interaction.reply({ content: '🔍 Pinging...', fetchReply: true });
		interaction.editReply(`Bot latency: **${sent.createdTimestamp - interaction.createdTimestamp}ms**\nAPI Ping: **${client.ws.ping}ms.**`);
}
}