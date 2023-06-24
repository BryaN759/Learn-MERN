
// __dirname = path to current directory
console.log(__dirname)
//__filename = path along with file name
console.log(__filename)
//setInterval to set a timer to print repeatedly
let count = 1
setInterval(() => {
    console.log('program '+count++)
}, 1000);//1000ms = 1s
