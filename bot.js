const Discord = require('discord.js');
const client = new Discord.Client();

const ayayay = client.emojis.get("497709500313108480");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!weeb') {
    	// message.reply('${ayayay}');
        const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
        message.channel.send(emojiList);
  	}
    if (message.content === '!help'|message.content === '!command'|message.content === '!commands') {
    	message.reply('SEND HELP ~ TRY !weeb');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
