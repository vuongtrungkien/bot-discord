const Discord = require('discord.js');
const client = new Discord.Client();
 client.login('Bot_Token');
let clientDiscord = client;
let prefix = '-g';
let prefixd = '-d';
console.log(clientDiscord)
clientDiscord.on('ready', () => {
});


clientDiscord.on('message', async message => {
 if (message.content.startsWith(`${prefix}play`)) {
  await game1(message, clientDiscord)
 } else {
  message.channel.send("You need to enter a valid command!");
 }
});

async function game1(message, client) {
 message.channel.send("Game sẽ bắt đầu trong 30s mời ae đặt cửa");
 let time = 30;
 setInterval(function () {
  time -= 1;
  client.on('message', async message => {
   if (message.content.startsWith(`${prefixd}`)) {

    message.reply('sdsdsd')
   }
  });

 }, 1000)

 const args = message.content.split(" ");

 const voiceChannel = message.member.voice.channel;
 if (!voiceChannel)
  return message.channel.send(
      "You need to be in a voice channel to play music!"
  );
 const permissions = voiceChannel.permissionsFor(message.client.user);
 if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
  return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
  );
 }
}



export default clientDiscord ;


