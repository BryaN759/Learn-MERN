// fs module
// const fs = require('fs') //reqular way

//http module

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('Here is the about page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cannot find the page you are looking for</p>
    <a href = '/'>back to home</a>
    `)
})

server.listen(5000)