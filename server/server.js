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
    socket.emit('message', buildMsg(ADMIN, 'Welcome to Chat App!'));

    // Enter Room listener
    socket.on('enterRoom', ({ name, room }) => {
        // leave previous room if such has been joined previously
        const prevRoom = getUser(socket.id)?.room;
        if (prevRoom) {
            socket.leave(prevRoom);
            io.to(prevRoom).emit('message', buildMsg(ADMIN, `${name} has left the room.`));
        }

        const user = activateUser(socket.id, name, room);

        // Update prev room users list AFTER state update in activate user
        if (prevRoom) {
            io.to(prevRoom).emit('userList', {
                users: getUsersInRoom(prevRoom),
            });
        }

        // Join room
        socket.join(user.room);

        // To user who joined
        socket.emit('message', buildMsg(ADMIN, `You have joined the ${user.room} chat room.`));

        // To everyone else in the room
        socket.broadcast.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has joined the room.`));

        // Update user list for the room
        io.to(user.room).emit('userList', {
            users: getUsersInRoom(user.room),
        });

        // Update rooms list for everyone
        io.emit('roomList', {
            rooms: getAllActiveRooms(),
        });
    });

    // When user disconnects - to all others
    socket.on('disconnect', () => {
        const user = getUser(socket.id);
        userLeavesApp(socket.id);

        if (user) {
            io.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has left the room.`));
            io.to(user.room).emit('userList', {
                users: getUsersInRoom(user.room),
            });
            io.emit('roomList', {
                rooms: getAllActiveRooms(),
            });
        }

        console.log(`User: ${socket.id} disconnected!`);
    });

    // Listening for a message event
    socket.on('message', ({ name, text }) => {
        const room = getUser(socket.id)?.room;
        if (room) {
            io.to(room).emit('message', buildMsg(name, text));
        }
    })

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