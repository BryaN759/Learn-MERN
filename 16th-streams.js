const { createReadStream } = require('fs')


//const stream = createReadStream('./content/big.txt', 'utf8')

// 64kb is default, we are changing it to 90kb
//const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' })


stream.on('data', (result) => {
    console.log(result)
})

// for error
stream.on('error',(err) => console.log(err))