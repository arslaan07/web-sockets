const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const socketIO = require("socket.io")
const io = socketIO(server)

app.set('view engine', 'ejs')


app.get("/", (req, res) => {
    res.render("index")
})
// point no 1
// io.on("connection", (socket) => {
//     console.log(`${socket.id} connected`)
//     socket.on("disconnect", () => {      // jab connected socket disconnect ho to ye callback chalega
//         console.log(`${socket.id} disconnected`)
//     })
// })

// point no 2
// io.on("connection", (socket) => {
//     socket.on("abcd", () => {    
//         console.log(`event received`)
//     })
// })

// point no 3
// io.on("connection", (socket) => {
//     socket.on("abcd", (data) => {      
//         console.log(data)
//     })
// })

// point no 4
// io.on("connection", (socket) => {
//     socket.on("abcd", () => {      
        // io.emit("defg", "data from backend") // saare users ko data bej rahe hai
//         socket.emit("defg", "ye sirf mere liye") 
//     })
// })

// point no 5
// io.on("connection", (socket) => {
//     console.log(`${socket.id} connected`)
//     socket.on("typing", () => {
        // socket.broadcast.emit("typing", `${socket.id} is typing`) // ye message mje cgodkr baki sb logu ko jayega
//     })
// })

// point no 6
// io.on("connection", (socket) => {
//     console.log(`${socket.id} connected`)
//     socket.on("disconnect", () => {
//         console.log(`${socket.id} disconnected`)
//     })
// })

// point no 7
io.on("connection", (socket) => {
    console.log(`${socket.id} is connected`)
    socket.on("typing", (data) => {
        socket.broadcast.emit("typing", data)
    })
})

server.listen(3000)