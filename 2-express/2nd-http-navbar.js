const http = require('http')
const { readFileSync } = require('fs')
// get the files
const homePage = readFileSync('./contents/index.html')
const homeStyles = readFileSync('./contents/styles.css')
const homeImage = readFileSync('./contents/logo.svg')
const homeLogic = readFileSync('./contents/browser-app.js')


const server = http.createServer((req,res) => {
    // console.log(req.method)
    const url = req.url
    // home
    if (url === '/'){
        res.writeHead(200,{'content-type': 'text/html'})
        res.write(homePage) //we can write the text directly into res.end
        res.end()
    }
    // home css
    else if (url === '/styles.css'){
        res.writeHead(200,{'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // home logo
    else if (url === '/logo.svg'){
        res.writeHead(200,{'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    // home js
    else if (url === '/browser-app.js'){
        res.writeHead(200,{'content-type': 'text/javascript'})
        res.write(homeLogic)
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