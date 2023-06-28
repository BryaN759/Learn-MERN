//path module
const path = require('path')

//path separator
console.log(path.sep)

//join
const filePath = path.join('\content','sub','path.txt')
console.log(filePath)

//base file
const base = path.basename(filePath)
console.log(base)

//shows the entire path 
const absolute = path.resolve(__dirname,'content', 'sub', 'path.txt')
console.log(absolute)
