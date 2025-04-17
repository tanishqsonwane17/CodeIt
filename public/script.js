const socket = io('/');
const mypeer = new Peer(undefined,{
    host:'/',
    port:3001   
})
socket.emit('join-room', ROOM_ID, 10);
socket.on('user-connected',userId=>{
console.log('user connected' + userId)
})