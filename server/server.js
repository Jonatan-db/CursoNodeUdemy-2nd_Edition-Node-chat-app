const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const http = require('http');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;

const app = express();
var server = http.createServer(app)
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');

    socket.on('createMessage', (message) =>{
        console.log('createMessage', message);
    });

    socket.emit('newMessage', {
        from: "Server",
        text: "Saludos desde el servidor!",
        createAt: 123
    });
    
    socket.on('disconnect', () => {
        console.log('El usuario se desconectó.');
    });
});

server.listen(port, ()=>{
    console.log(`Servidor corriendo en: http://localhost:${port}`);
});

