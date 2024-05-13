# JS-Websocket-Chat
Basic vanilla JS real-time chat app using websockets. Supports users, chat rooms, active rooms and joined users tracking. Everything updates and is diaplyed in real time.

## Deployment
- [DEMO](https://js-websocket-chat.onrender.com/)


## Progress log:
1. Created a server using a library called [ws](https://www.npmjs.com/package/ws)
2. Made a script to run the server
3. Created a client using vanilla JS and a few basic elements
    - A form to take user's input
    - An unordered list to display messages into as they come through
4. Made sure messages are also readable on the server - reading from the buffer
5. Modified the imports to fully use ES6
6. Upgraded the server from a simple websocket to socket.io to enhance scalability and take advantage of all additional benefits listed here [socket.io](https://www.npmjs.com/package/socket.io)
7. Incorporate Express.js into the server
8. Add connect & disconnect events with announcement messages
9. Add activity detection - eg. show when someone is typing something to the other users
10. Upgrade activity display with proper clearing when the user has stopped typing or has sent a message
11. Display Users and Rooms in real time for all connected users
12. Display personalized event messages depending on the user and room
13. Final visual tweeks.
14. Basic design finished.
