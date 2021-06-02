import {arrayShowTime, defineResult} from "./constans";

const Discord = require('discord.js');
const client = new Discord.Client();
import {showTime, randomResult, removeAccents, checkResult} from "./comon";

client.login('TOKEN');
let clientDiscord = client;
let arrayGuess = {};
let prefix = '-g';
let prefixd = '-d';
let process = false;
let result = [];
clientDiscord.on('ready', () => {
});


clientDiscord.on('message', async message => {
    if (message.content.startsWith(`${prefix} play`)) {
        if (process) return;
        arrayGuess = {};
        result = [];
        result = randomResult();
        await game1(message)
    }
    if (message.content.startsWith(`${prefixd}`, 0)) {
     if (!process) return;
        let guess = await removeAccents(message.content, prefixd);
        if (!defineResult[guess]) return;
        if (!arrayGuess[defineResult[guess]]) {
            arrayGuess[defineResult[guess]] = [];
        }
        arrayGuess[defineResult[guess]].push(`${message.author.username} đã đặt ${defineResult[defineResult[guess]]}`)
    }
});

async function game1(message) {
    process = true;
    let time = 30;
    message.channel.send("Game start có 30s cho ae đặt cửa");
    let interval = setInterval(async function () {
        time -= 1;
        arrayShowTime.includes(time) ? showTime(time, message) : '';
        if (!time) {
            const gameResult = result.map((item) => defineResult[item]).join(', ');
            const userResult = checkResult(result, arrayGuess).join(', ');
           await message.channel.send(`Kết quả: ${[gameResult]}`);
           let msg = `Xin chúc mừng : ${userResult} 🎉🎉🎉🎉🎉🎉`;
           if (!userResult.length) {
               msg = 'Rất tiếc không có ai đặt đúng!'
           }
           await message.channel.send(msg);
            clearInterval(interval);
            process = false;
        }
    }, 1000)

}


export default clientDiscord;


