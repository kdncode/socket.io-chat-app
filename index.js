var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
})

// Socket intergration
io.on('connection', (socket) =>{
    // console.log('A user connected', socket.id);
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })

    //Disconnect 
    // socket.on('disconnect', () => {
    //     console.log('User disconnected', socket.id);
    // })
})

http.listen(3000, () => {
    console.log('listening on *:3000');
})