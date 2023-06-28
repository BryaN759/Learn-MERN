const express = require('express')
const app = express()

// we can also invoke like
// const app = require('express')()

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen


app.get('/', (req,res)=>{
    res.status(200).send('Home Page')
})

app.get('/about', (req,res)=>{
    res.status(200).send('About Page')
})
// err 404
app.all('*', (req,res)=>{       // * means anything
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(5000, ()=> console.log('Server is Listening on port 5000...'))

