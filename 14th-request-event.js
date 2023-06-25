const http = require('http')


// Normal Convention of creating a server
// const server = http.createServer('request', (req,res)=>{
//     res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()

// emits request event
// subscribe to it / listen to it / respond to it
server.on('request', (req,res)=>{
    res.end('Welcome')
})

server.listen(5000)