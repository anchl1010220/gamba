const Discord = require('discord.js');
const client = new Discord.Client();

const responseObject = { // https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/message-reply-array.html
    "ping": "pong",
};

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]); // Line 4
    }
    if (message.content === '!weeb') {
    	// message.reply('${ayayay}');
        const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
        message.channel.send(emojiList);
  	}
    if (message.content === '!help'|message.content === '!command'|message.content === '!commands') {
    	message.reply('SEND HELP <:buh:445414053850906625> TRY !gamba');
  	}
    if (message.content === '<:AYAYA:497706450458509312>') {
        // const x = client.emojis.get("497706450458509312");
        // const y = client.emojis.find("name", "ayayay");  
        message.react("497706450458509312")
    }
    if (message.content === '!gamba') {
        // const user = message.member.id;
        // var array1 = [...Array(100).keys()];
        message.channel.send('[ <:2ba:497731536649584650> WEEB SLOTS <:2ba:497731536649584650> ] \n ------------------ \n ${r1o1} : ${r2o1} : ${r3o1} \n  \n ${r1o2} : ${r2o2} : ${r3o2} ◀◀◀ \n \n ${r1o3} : ${r2o3} : ${r3o3} \n ------------------ \n | : : :  ${outcome}  : : : | \n ${user} used ${cred} credit(s) and ${total}.');   
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
