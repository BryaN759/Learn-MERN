const express = require('express')
const app = express()

const { products } = require('./data.js')

app.get('/', (req,res)=>{
    // res.json([{name:'Abul'},{name:'Nesar'}])
    res.json(products)
})

app.listen(5000, ()=> console.log('Server is listening on port 5000....'))