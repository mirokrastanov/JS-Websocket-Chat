import { PORT } from './public/constants.js';
import express from 'express';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ADMIN = 'Admin';

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const expressServer = app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));

// state (as it's not connected to a db for now)
const usersState = {
    users: [],
    setUsers: function (newUsersArray) {
        this.users = newUsersArray;
    },
};

const io = new Server(expressServer, {
    cors: {
        // origin: '*',
        origin: process.env.NODE_ENV === 'production'
            ? false
            : [`http://localhost:${PORT}`, `http://127.0.0.1:${PORT}`],
        // List the frond end app's domain above if hosted somewhere else
    }
});

// When a user connects
io.on('connection', socket => {
    console.log(`User: ${socket.id} connected!`);

    // Upon connection - only to user
    socket.emit('message', 'Welcome to Chat App!');

    // Upon connection - to all others, except the user
    socket.broadcast.emit('message', `User: ${socket.id.substring(0, 5)} connected!`)

    // Listening for a message event
    socket.on('message', data => {
        console.log(data);
        io.emit('message', `${socket.id.substring(0, 5)}: ${data}`);
    })

    // When user disconnects - to all others
    socket.on('disconnect', () => {
        socket.broadcast.emit('message', `User: ${socket.id.substring(0, 5)} disconnected!`)
    });

    // Listen for activity
    socket.on('activity', (name) => {
        socket.broadcast.emit('activity', name);
    });
})

function buildMsg(name, text) {
    return {
        name,
        text,
        time: new Intl.DateTimeFormat('default', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }).format(new Date()),
    }
}

// User functions 
function activateUser(id, name, room) {
    const user = { id, name, room };
    usersState.setUsers([
        ...usersState.users.filter(user => user.id !== id),
        user,
    ]);
    return user;
}

function userLeavesApp(id) {
    usersState.setUsers(
        usersState.users.filter(user => user.id !== id)
    );
}

function getUser(id) {
    return usersState.users.find(user => user.id === id);
}

function getUsersInRoom(room) {
    return usersState.users.filter(user => user.room === room);
}

function getAllActiveRooms() {
    return Array.from(new Set(usersState.users.map(user => user.room)));
}