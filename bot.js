const Discord = require('discord.js');
const client = new Discord.Client();

const talkedRecently = new Set();

const responseObject = { // https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/message-reply-array.html
	"hey": "hey dude, what's up?",
	"!g": "no",
};

var array1 = [...Array(100).keys()];
var x = new Array();
var i;
var rand;
var outcome;

// k 

client.on('ready', () => {
    	console.log('I am here!');
	client.user.setPresence({ game: { name: 'Shikon no Tama', type:3 }});
});

client.on('message', message => {
	if(message.author.bot) return;
	
	if(message.content === 'ping') {  // https://gist.github.com/eslachance/3349734a98d30011bb202f47342601d3
	 	message.reply(Math.round(client.ping) + ' ms');
 	 }
    if (responseObject[message.content]) {
        message.channel.send(responseObject[message.content]); // Line 6, check responseObject
    	}
    if (message.content === 'weeb!weeb') {
    	// retard check
	//message.member.roles.find("name", "admin");
       	message.channel.send('<:monikaS:498832686228439061>');
  	}
    if (message.content === 'weeb!list'| message.content === 'w!list') {
    	// message.reply('${ayayay}');
        const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
        message.channel.send(emojiList);
  	}
    if (message.content === 'weeb!help'|message.content === '!gamba'|message.content === 'w!help') {
    	message.reply('*SEND HELP* <:buh:445414053850906625> TRY weeb!gamba');
  	}
    if (message.content === 'weeb!command'|message.content === 'weeb!commands'|message.content === 'w!command'|message.content === 'w!commands') {
    	message.reply('Try these: **weeb![ gamba | help | list ]**');
  	}
    if (message.content === '<:AYAYA:497706450458509312>') {
        // const x = client.emojis.get("497706450458509312");
        // const y = client.emojis.find("name", "ayayay");  
        message.react("497706450458509312")
    	}
    if (message.content === 'weeb!gamba'|message.content === 'w!g'|message.content === 'w!gamba') {
        // const user = message.member.id;
        // var array1 = [...Array(100).keys()];
	    
	if (talkedRecently.has(message.author.id)) {
		message.reply('There\'s a 4 second cooldown inbetween gambas. <:AYAYA:497706450458509312>');
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
		outcome = "<:aqua1:497870765627015179>**LOSER!**<:aqua2:498832685859602434>"; 
	}
           
		message.channel.send('<:2ba:497731536649584650>***WEEBS***<:2ba:497731536649584650>\n-----------------\n' + x[1] + ' : ' + x[2] + ' : ' + x[3] + '\n  \n' + x[4] + ' : ' + x[5] + ' : ' + x[6] + ' - ◀ Match 3 in this row to win FREE Taco Bell™! \n \n' + x[7] + ' : ' + x[8] + ' : ' + x[0] + '\n-----------------\n' +  outcome);       
    	
	    	// command cooldown - https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/misc-examples.html
		talkedRecently.add(message.author.id);
		setTimeout(() => { talkedRecently.delete(message.author.id); }, 4000); // 4 sec cd
    	}
	
	if (message.content === 'weeb!gamba easy'|message.content === 'w!gamba easy'|message.content === 'w!g ez') {
	// if (message.content === 'w!g ez') {
        // const user = message.member.id;
        // var array1 = [...Array(100).keys()];
	    
		if (talkedRecently.has(message.author.id)) {
			message.reply('There\'s a 4 second cooldown inbetween gambas. <:AYAYA:497706450458509312>');
  			return;
	      }
        for (i=0; i<9; i++) {
            rand = array1[Math.floor(Math.random() * array1.length)];
            if (rand <= 27) {
	            x[i]="<:bu1:497643990758457354>";
            } else if (28 <= rand && rand <= 51) {
	            x[i]="<:bu2:497643986815680522>";
            } else if (52 <= rand && rand <= 71) {
	            x[i]="<:bu3:497643988946386947>";
            } else if (72 <= rand && rand <= 87) {
            	x[i]="<:bu4:497643986782257153>";
            } else if (88 <= rand && rand <= 99) {
	            x[i]="<:bu5:497643988212252675>";
            } 
	    }
	if (x[0] === x[1] && x[1] === x[2]) {
 	 	outcome = "<:lala2:497870765937655828>**W O W**<:lala1:497870766067417088> ";
	} else if (x[3] === x[4] && x[4] === x[5]) {
		outcome = "<:lala2:497870765937655828>**W O W**<:lala1:497870766067417088> ";
	} else if (x[6] === x[7] && x[7] === x[8]) {
		outcome = "<:lala2:497870765937655828>**W O W**<:lala1:497870766067417088> ";
	} else {
		outcome = "<:aqua1:497870765627015179>**LOSER!**<:aqua2:498832685859602434>"; 
	}
           
		message.channel.send('<:2ba:497731536649584650>***WEEBS***<:2ba:497731536649584650>\n-----------------\n' + x[0] + ' : ' + x[1] + ' : ' + x[2] + ' - ◀\n  \n' + x[3] + ' : ' + x[4] + ' : ' + x[5] + ' - ◀ Match 3 in any row to win! \n \n' + x[6] + ' : ' + x[7] + ' : ' + x[8] + ' - ◀\n-----------------\n' +  outcome);       
    	
	    	// command cooldown - https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/misc-examples.html
		talkedRecently.add(message.author.id);
		setTimeout(() => { talkedRecently.delete(message.author.id); }, 4000); // 4 sec cd (4000ms)
    	}
	if (message.content === 'weeb!joris'|message.content === 'w!joris')
	{
		message.channel.send('**P e r c e n t ? **\n<:bu1:497643990758457354> -> 15 (28)\n<:bu2:497643986815680522> -> 15 (24)\n<:bu3:497643988946386947> -> 15 (20)\n<:bu4:497643986782257153> -> 15 (16)\n<:bu5:497643988212252675> -> 15 (12)\n<:nobu1:497699521829142537> -> 5\n<:nobu2:497699519346114560> -> 5\n<:nobu3:497699520306479107> -> 5\n<:shinobu:497699520843350026> -> 6\n<:eggy:497675280891248671> -> 3\n<:instanut:497647573247459328> -> 1\n');
	}
	if (message.content === 'weeb!top'|message.content === 'w!top')
	{
		// lol
		const channel = message.channel;
		message.channel.send(message.author.toString());
	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
