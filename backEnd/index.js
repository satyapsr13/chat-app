const app = require('express')()
const http = require('http').createServer(app)
const port=process.env.PORT||8080
app.get('/', (req, res) => {
    res.send("Node Serfdsfver is running. Yay!!")
})
// http.listen(8080)

//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data)
    })
})

http.listen(port)