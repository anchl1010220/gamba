const Discord = require('discord.js');
const client = new Discord.Client();

const talkedRecently = new Set();

const responseObject = { // https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/message-reply-array.html
    "ping": "pong",
};

var array1 = [...Array(100).keys()];
var x = new Array();
var i;
var rand;
var outcome;

// k 

client.on('ready', () => {
    	console.log('I am ready!');
	client.user.setPresence({ game: { name: 'Shikon no Tama', type:3 }});
});

client.on('message', message => {
    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]); // Line 4
    	}
    if (message.content === 'weeb!list') {
    	// message.reply('${ayayay}');
        const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
        message.channel.send(emojiList);
  	}
    if (message.content === 'weeb!help'|message.content === '!gamba') {
    	message.reply('*SEND HELP* <:buh:445414053850906625> TRY weeb!gamba');
  	}
    if (message.content === 'weeb!command'|message.content === 'weeb!commands') {
    	message.reply('Try these: **weeb![ list | help | gamba ]**');
  	}
    if (message.content === '<:AYAYA:497706450458509312>') {
        // const x = client.emojis.get("497706450458509312");
        // const y = client.emojis.find("name", "ayayay");  
        message.react("497706450458509312")
    	}
    if (message.content === 'weeb!gamba'|message.content === 'w!g') {
        // const user = message.member.id;
        // var array1 = [...Array(100).keys()];
	    
	if (talkedRecently.has(message.author.id)) {
		message.reply('There\'s a 5 second cooldown between gambas. <:AYAYA:497706450458509312>');
  		return;
	      }
        for (i=0; i<9; i++) {
            rand = array1[Math.floor(Math.random() * array1.length)];
            if (rand <= 14) {
	            x[i]="<:bu1:497643990758457354>";
            } else if (15 <= rand && rand <= 29) {
	            x[i]="<:bu2:497643986815680522>";
            } else if (30 <= rand && rand <=44) {
	            x[i]="<:bu3:497643988946386947>";
            } else if (45 <= rand && rand <= 59) {
            	x[i]="<:bu4:497643986782257153>";
            } else if (60 <= rand && rand <= 74) {
	            x[i]="<:bu5:497643988212252675>";
            } else if (75 <= rand && rand <= 79) {
            	x[i]="<:nobu1:497699521829142537>";
            } else if (80 <= rand && rand <= 84) {
            	x[i]="<:nobu2:497699519346114560>";
            } else if (85 <= rand && rand <= 89) {
            	x[i]="<:nobu3:497699520306479107>";
            } else if (90 <= rand && rand <= 95) {
	            x[i]="<:shinobu:497699520843350026>";
            } else if (96 <= rand && rand <= 98) {
            	x[i]="<:instanut:497647573247459328>";
            } else 
            	x[i]="<:eggy:497675280891248671>";
            }
	    
	    
	if (x[3] === x[4] && x[4] === x[5]) {
 	 	outcome = "<:lala2:497870765937655828>**WINNER!**<:lala1:497870766067417088> ";
	} else {
		outcome = "<:aqua1:497870765627015179>**LOSER!**<:mim1:497870765962559498>"; 
	}
           
		message.channel.send('<:2ba:497731536649584650>***WEEBS***<:2ba:497731536649584650>\n-----------------\n' + x[1] + ' : ' + x[2] + ' : ' + x[3] + '\n  \n' + x[4] + ' : ' + x[5] + ' : ' + x[6] + ' - ◀ Match 3 in this row to win FREE Taco Bell™! \n \n' + x[7] + ' : ' + x[8] + ' : ' + x[0] + '\n-----------------\n' +  outcome);       
    	
	    	// command cooldown - https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/misc-examples.html
		talkedRecently.add(message.author.id);
		setTimeout(() => { talkedRecently.delete(message.author.id); }, 5000); // 5 sec cd
    	}
	
	if (message.content === 'weeb!gamba easy'|message.content === 'w!g ez') {
        // const user = message.member.id;
        // var array1 = [...Array(100).keys()];
	    
		if (talkedRecently.has(message.author.id)) {
			message.reply('There\'s a 5 second cooldown between gambas. <:AYAYA:497706450458509312>');
  			return;
	      }
        for (i=0; i<9; i++) {
            rand = array1[Math.floor(Math.random() * array1.length)];
            if (rand <= 19) {
	            x[i]="<:bu1:497643990758457354>";
            } else if (20 <= rand && rand <= 39) {
	            x[i]="<:bu2:497643986815680522>";
            } else if (40 <= rand && rand <=59) {
	            x[i]="<:bu3:497643988946386947>";
            } else if (60 <= rand && rand <= 79) {
            	x[i]="<:bu4:497643986782257153>";
            } else if (80 <= rand && rand <= 99) {
	            x[i]="<:bu5:497643988212252675>";
            } 
	    }
	if (x[0] === x[1] && x[1] === x[2]|x[3] === x[4] && x[4] === x[5]|x[6] === x[7] && x[7] === x[8]) {
 	 	outcome = "<:lala2:497870765937655828>**W O W**<:lala1:497870766067417088> ";
	} else {
		outcome = "<:aqua1:497870765627015179>**LOSER!**<:mim1:497870765962559498>"; 
	}
           
		message.channel.send('<:2ba:497731536649584650>***WEEBS***<:2ba:497731536649584650>\n-----------------\n' + x[1] + ' : ' + x[2] + ' : ' + x[3] + ' - ◀\n  \n' + x[4] + ' : ' + x[5] + ' : ' + x[6] + ' - ◀ Match 3 in any row to win! \n \n' + x[7] + ' : ' + x[8] + ' : ' + x[0] + ' - ◀\n-----------------\n' +  outcome);       
    	
	    	// command cooldown - https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/misc-examples.html
		talkedRecently.add(message.author.id);
		setTimeout(() => { talkedRecently.delete(message.author.id); }, 5000); // 5 sec cd (5000ms)
    	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
