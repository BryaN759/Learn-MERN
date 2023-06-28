const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url
    // home
    if (url === '/'){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h1>Home Page</h1>') //we can write the text directly into res.end
        res.end()
    }
    // about
    else if (url === '/about'){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h1>About Page</h1>') //we can write the text directly into res.end
        res.end()
    }
    // err 404
    else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>') //we can write the text directly into res.end
        res.end()
    }
  
})

server.listen(5000)