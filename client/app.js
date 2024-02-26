import { PORT } from '../server/constants.js';
const socket = new WebSocket(`ws://localhost:${PORT}`);

function sendMessage(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value) {
        socket.send(input.value);
        // console.log('send - ' + input.value);
        input.value = '';
    }
    input.focus();
}

document.querySelector('form').addEventListener('submit', sendMessage);

// Listen for messages
socket.addEventListener('message', ({ data }) => {
    const li = document.createElement('li');
    li.textContent = data;
    console.log(li);
    document.querySelector('ul').appendChild(li);
});