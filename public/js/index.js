var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
  
    socket.emit('createMessage', {
        from: "Jony",
        text: "Mensaje enviado al servidor"
    })
});

socket.on('disconnect', function () {
    console.log('Desconectado del servidor');
});

socket.on('newMessage', function (message){
    console.log("Mensaje del server: ", message);
})
