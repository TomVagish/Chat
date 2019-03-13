const express = require('express');
const router = express.Router();
const app = require('../app');
// define http & server 
const http = require('http');
const server = http.Server(app);

// define socketio to server
const socketio = require('socket.io');
const io = socketio(server);




// method that check if user connect
io.on('connection',(socket) =>{
 
    // new user join
    socket.on('join',function(data){
        socket.join(data.room)
        console.log(data.user + " joined to:" + data.room + data.date);
        socket.broadcast.to(data.room)
        .emit('new user joined',{user:data.user,message:'joined this room',date:data.date});
    });

    // user leave
    socket.on('leave',function(data){
        socket.leave(data.room)
        console.log(data.user + " leave :" + data.room);
        console.log(data.user + " joined to:" + data.room + data.date);
        socket.broadcast.to(data.room)
        .emit('new user leave',{user:data.user,message:'leave this room',date:data.date});
    });

    // handle in incoming message from client!
socket.on('new-message', (data) => {
    console.log(data);
    io.in(data.room).emit('new-message',{user:data.user,message:data.message,date:data.date});
  });


socket.on('typing',(data) => {
    console.log(data.user);
 socket.broadcast.to(data.room).emit('typing',{user:data.user});
});

socket.on('stop-typing',(data) => {
    console.log(data.user);
 socket.broadcast.to(data.room).emit('stop-typing',{user:data.user});
});

});

module.exports = router;