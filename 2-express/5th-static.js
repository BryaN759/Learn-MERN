const express= require('express')
const path = require('path')
const app = express()

// setup static  and middleware
app.use(express.static('./public'))

// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname,'./contents/index.html'))    // here we could have used .join in place of .resolve, but to make sure that it sends the absolute path we use .resolve
//     adding to static assets
//     SSR
// })

// errpr: 404
app.all('*', (req,res)=>{
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(5000, ()=> console.log('Server is listening in port 5000'))

