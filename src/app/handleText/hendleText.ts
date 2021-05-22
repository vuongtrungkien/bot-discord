import clientDiscord from '../main'

clientDiscord.on('ready', () => {
    console.table(clientDiscord.user);
});

clientDiscord.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong111!');
    }
});
