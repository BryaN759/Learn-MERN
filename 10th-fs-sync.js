// fs module
// const fs = require('fs') //reqular way

//alternate way
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/1-fs.txt','utf8')
const second = readFileSync('./content/2-fs.txt','utf8')
console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`
)

