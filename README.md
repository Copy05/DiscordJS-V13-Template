# DiscordJS-V13-Template
Discord.js v13 Template and commands ready to use


# How to use it

To use discord.js install these packages:
```sh
npm install discordjs/builders @discordjs/rest discord-api-types fs
```

ether you can use the `index.js` of the repo or code it yourself:
```js
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { TOKEN } = require('./config.json')
client.commands = new Collection();

// The Bot goes up
client.once('ready', () => {
	console.log('Ready!');
	client.user.setPresence({ activities: [{ name: 'activity text here' }], status: 'online' });
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);

	if (!command) return;
	try {
		await command.execute(interaction, client);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// Logins into the bot account
client.login(TOKEN);
```

to register slash commands use the `deploy-commands.js` of the repo

<h2>Repo:</h2>

Download the file you wanna include to your bot and credit me in your `credits` command like:
```
[COMMAND NAME] provided by: [Copy05](https://github.com/Copy05/)
```

if you have a `package.json` file i recomend you adding:
```json
"scripts": {
    "start": "node deploy-commands.js && node index.js"
  },
```

**NOTE: YOU REQUIRE BASIC JAVASCRIPT KNOWLEDGES TO CODE A BOT**

The peoples at Discord.js Guide have explained everything perfect: [Discord.js Guide](https://discordjs.guide/#before-you-begin)
