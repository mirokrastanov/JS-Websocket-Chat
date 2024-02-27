import { PORT_BE, PORT_FE } from './constants.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        // origin: '*',
        origin: process.env.NODE_ENV === 'production' ? false : [`http://localhost:${PORT_FE}`],
    }
});

io.on('connection', socket => {
    console.log(`User: ${socket.id} connected!`);

    socket.on('message', data => {
        console.log(data);
        io.emit('message', `${socket.id.substring(0, 5)}: ${data}`);
    })
})

httpServer.listen(PORT_BE, () => console.log(`Listening on port: ${PORT_BE}...`));