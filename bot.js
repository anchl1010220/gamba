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
    	message.reply('Try these: **weeb![ gamba | help | joris | list | top ]**');
  	}
    if (message.content === '<:AYAYA:497706450458509312>') {
        // const x = client.emojis.get("497706450458509312");
        // const y = client.emojis.find("name", "ayayay");  
        message.react("497706450458509312");
	message.react("642242790855802881");
    	}
    if (message.content === 'weeb!gamba'|message.content === 'w!g'|message.content === 'w!gamba') {
        // const user = message.member.id;
        // var array1 = [...Array(100).keys()];
	    
	if (talkedRecently.has(message.author.id)) {
		message.reply('There\'s a 1 second cooldown inbetween gambas. <:AYAYA:497706450458509312>');
  		return;
	      }
        for (i=0; i<9; i++) {
            rand = array1[Math.floor(Math.random() * array1.length)];
            if (rand <= 27) {
	            x[i]="<:bu1:497643990758457354>";
            } else if (28 <= rand && rand <= 45) {
	            x[i]="<:bu2:497643986815680522>";
            } else if (46 <= rand && rand <= 57) {
	            x[i]="<:bu3:497643988946386947>";
            } else if (58 <= rand && rand <= 69) {
            	x[i]="<:bu4:497643986782257153>";
            } else if (70 <= rand && rand <= 81) {
	            x[i]="<:bu5:497643988212252675>";
            } else if (82 <= rand && rand <= 85) {
            	x[i]="<:nobu1:497699521829142537>";
            } else if (86 <= rand && rand <= 89) {
            	x[i]="<:nobu2:497699519346114560>";
            } else if (90 <= rand && rand <= 93) {
            	x[i]="<:nobu3:497699520306479107>";
            } else if (94 <= rand && rand <= 96) {
	            x[i]="<:shinobu:497699520843350026>";
            } else if (97 <= rand && rand <= 98) {
            	x[i]="<:instanut:497647573247459328>";
            } else 
            	x[i]="<:eggy:497675280891248671>";
            }
	    
	    
	if (x[3] === x[4] && x[4] === x[5]) {
 	 	outcome = "<:lala2:497870765937655828>**WINNER!**<:lala1:497870766067417088> ";
	} else {
		outcome = "<:aqua1:497870765627015179>**LOSER!**<:aqua2:498832685859602434>"; 
	}
           
		message.channel.send('<:2ba:497731536649584650>***WEEBS***<:2ba:497731536649584650>\n-----------------\n' + x[0] + ' : ' + x[1] + ' : ' + x[2] + '\n  \n' + x[3] + ' : ' + x[4] + ' : ' + x[5] + ' - ◀ Match 3 in this row to win FREE Taco Bell™! \n \n' + x[6] + ' : ' + x[7] + ' : ' + x[8] + '\n-----------------\n' +  outcome);       
    	
	    	// command cooldown - https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/examples/misc-examples.html
		talkedRecently.add(message.author.id);
		setTimeout(() => { talkedRecently.delete(message.author.id); }, 1000); // 4 sec cd
    	}
	
	if (message.content === 'weeb!gamba easy'|message.content === 'w!gamba easy'|message.content === 'w!g ez') {
	// if (message.content === 'w!g ez') {
        // const user = message.member.id;
        // var array1 = [...Array(100).keys()];
	    
		if (talkedRecently.has(message.author.id)) {
			message.reply('There\'s a 1 second cooldown inbetween gambas. <:AYAYA:497706450458509312>');
  			return;
	      }
        for (i=0; i<9; i++) {
            rand = array1[Math.floor(Math.random() * array1.length)];
            if (rand <= 49) {
	            x[i]="<:bu1:497643990758457354>";
            } else if (50 <= rand && rand <= 69) {
	            x[i]="<:bu2:497643986815680522>";
            } else if (70 <= rand && rand <= 84) {
	            x[i]="<:bu3:497643988946386947>";
            } else if (85 <= rand && rand <= 94) {
            	x[i]="<:bu4:497643986782257153>";
            } else if (95 <= rand && rand <= 99) {
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
		setTimeout(() => { talkedRecently.delete(message.author.id); }, 1000); // 4 sec cd (4000ms)
    	}
	if (message.content === 'weeb!joris'|message.content === 'w!joris')
	{
		message.channel.send('**P e r c e n t ? **\n<:bu1:497643990758457354> -> 28 (50)\n<:bu2:497643986815680522> -> 18 (20)\n<:bu3:497643988946386947> -> 12 (15)\n<:bu4:497643986782257153> -> 12 (10)\n<:bu5:497643988212252675> -> 12 (5)\n<:nobu1:497699521829142537> -> 4\n<:nobu2:497699519346114560> -> 4\n<:nobu3:497699520306479107> -> 4\n<:shinobu:497699520843350026> -> 3\n<:eggy:497675280891248671> -> 2\n<:instanut:497647573247459328> -> 1\n');
	}
	if (message.content === 'weeb!top'|message.content === 'w!top')
	{
		// https://discord.js.org/#/docs/main/stable/class/User
		// https://gist.github.com/ringmatthew/9f7bbfd102003963f9be7dbcf7d40e51
		// const channel = message.channel;
		const msg = message.author.username;
		message.channel.send("<:AYAYA:497706450458509312>**Mirror, mirror on the wall, who is the weebiest one of all?**<:AYAYA:497706450458509312>\n```glsl\n📋 Rank | Name\n\n[1]     > #" + msg + "\n            Total Score: 42069\n\n\"KONO DIAVOLO DA\"\n - Diavolo \n```");
	}
	
	if (message.content === 'weeb!test'|message.content === 'w!test')
	{
		if (message.author.id !== '227971175161004033') {
			message.reply("DO<:AYAYA:497706450458509312>YOU<:AYAYA:497706450458509312>LIKE<:AYAYA:497706450458509312>WHAT<:AYAYA:497706450458509312>YOU<:AYAYA:497706450458509312>SEE?");
			return;
		}
			
		message.channel.send(message.author.tag + " " + message.author.presence);
	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
