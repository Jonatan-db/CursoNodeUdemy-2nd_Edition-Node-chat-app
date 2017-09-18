var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
  
    console.log('Enviando mensaje...');

    socket.emit('mensajeDelUsuario', {
        from: "Usuario", 
        to: "Server"
    });
});

socket.on('disconnect', function () {
    console.log('Desconectado del servidor');
});

socket.on('mensajeDelServer', function (mensaje){
    console.log("Mensaje del server: ", mensaje);
})
