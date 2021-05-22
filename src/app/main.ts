const Discord = require('discord.js');
const client = new Discord.Client();
 client.login('ODQ0NjE0MzQwNjk0OTAwNzk3.YKU-Zg.i0SXh-87JffW20M9cjnfpeM7MnE');
let clientDiscord = client;
let prefix = '-g'
console.log(clientDiscord)
clientDiscord.on('ready', () => {
});

clientDiscord.on('message', async msg => {
 if (msg.content === 'nữ vương sora đang làm gì') {
  msg.channel.send('Nữ vương sora đang hát ');
 }
});

export default clientDiscord ;


