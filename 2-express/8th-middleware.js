const express = require('express');
const app = express();
const logger = require('./logger.js');
const authorize = require('./authorize.js');
const morgan = require('morgan');

// req => middleware => res
/* const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next()
};
 */

// for using logger directly
/* app.get('/', logger, (req, res)=>{
    res.send('Home');
}); */

// app.use([logger, authorize]);

// for all the url that has /api in it
//app.use('/api',logger);

app.use(morgan('tiny'));

app.get('/', (req, res)=>{
    res.send('Home');
});
app.get('/about', (req, res)=>{
    res.send('About');
});

app.get('/api/products', (req, res)=>{
    res.send('Products');
});
app.get('/api/items', (req, res)=>{
    res.send('Items');
});
    


app.listen(5000, ()=> console.log('Server is listening on port 5000....'));