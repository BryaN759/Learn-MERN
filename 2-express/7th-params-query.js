const express = require('express')
const app = express()

const { products } = require('./data.js')

app.get('/', (req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})
// how to return selected data from json
app.get('/api/products',(req,res)=>{
    // res.json(products)
    const newProducts = products.map((product)=>{
        const { id, name, image } = product;
        return { id, name, image}
    })
    res.json(newProducts)
})
// for only 1 page
/* app.get('/api/products/1',(req,res)=>{
    const singleProduct = products.find((product) => product.id === 1)
        res.json(singleProduct)
}) */

// for all pages with id
app.get('/api/products/:productID',(req,res)=>{
    // req.params returns the productID input by user
    // console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id === Number(productID)) // params passes the productID as string, so we convert to number
        if(!singleProduct){
            return res.status(404).send('Product does not exist')
        }
        return res.json(singleProduct)
})
// for query, after param type- ?key=value&key=value
app.get('/api/v1/query',(req,res)=>{
    //req.query returns the called query
    // console.log(req.query)
    const  { search, limit } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length <1){
        return res.status(200).json({success: true, data: [] })
    }
    return res.status(200).json(sortedProducts)
})


app.listen(5000, ()=> console.log('Server is listening on port 5000....'))