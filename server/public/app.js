import { PORT } from './constants.js';
const socket = io(`ws://localhost:${PORT}`);

const msgInput = document.querySelector('#message');
const nameInput = document.querySelector('#name');
const chatRoom = document.querySelector('#room');
const activity = document.querySelector('.activity');
const usersList = document.querySelector('.user-list');
const roomsList = document.querySelector('.room-list');
const chatDisplay = document.querySelector('.chat-display');

function sendMessage(e) {
    e.preventDefault();
    if (msgInput.value && nameInput.value && chatRoom.value) {
        socket.emit('message', {
            text: msgInput.value,
            name: nameInput.value,
        });
        msgInput.value = '';
    }
    msgInput.focus();
}

document.querySelector('form').addEventListener('submit', sendMessage);

// Listen for messages
socket.on('message', (data) => {
    
    // clear list during development
    if (data == 'Welcome to Chat App!') {
        document.querySelector('ul').replaceChildren();
    }

    activity.textContent = '';
    const li = document.createElement('li');
    li.textContent = data;
    document.querySelector('ul').appendChild(li);
});

msgInput.addEventListener('keypress', () => {
    socket.emit('activity', socket.id.substring(0, 5));
});

let activityTimer;
socket.on('activity', (name) => {
    activity.textContent = `${name} is typing...`;

    // Clear after 1 second
    clearTimeout(activityTimer);
    activityTimer = setTimeout(() => {
        activity.textContent = '';
    }, 1000);
});