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
        // const x = client.emojis.get("497706450458509312");
        // const y = client.emojis.find("name", "ayayay");   
    	message.reply('SEND HELP ~ TRY !weeb');
  	}
    if (message.content === '<:AYAYA:497706450458509312>') {
        message.react("497706450458509312")
    }
    if (message.content === '!gamba') {
        message.channel.send('[ <:shinobu:497699520843350026> WEEB SLOTS <:shinobu:497699520843350026> ] \n ------------------ \n Line 3 \n  \n Line 5 \n \n Line 7 \n ------------------ \n | : : :  ALWAYS LOSE OMGEALUL  : : : |');   
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
