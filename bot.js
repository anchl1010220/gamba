const Discord = require('discord.js');
const client = new Discord.Client();

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
    if (message.content === 'AYAYAY') {
        const x = client.emojis.get("497706450458509312");
        const y = client.emojis.find("name", "ayayay");   
        message.channel.send(${x} ${y});
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
