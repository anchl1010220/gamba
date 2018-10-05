const Discord = require('discord.js');
const client = new Discord.Client();

const ayayay = client.emojis.get("497709500313108480");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!weeb') {
    	message.reply('${ayayay}');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
