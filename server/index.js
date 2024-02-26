const { PORT } = require('./constants');
const ws = require('ws');
const server = new ws.Server({ port: PORT });

server.on('connection', socket => {
    socket.on('message', message => {
        console.log(message);
        socket.send(`${message}`);
    })
})