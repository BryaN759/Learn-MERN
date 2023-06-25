// Promise

//const { readFile,writeFile } = require('fs')
const { readFile,writeFile } = require('fs').promises //added .promises later

// const getText = (path) =>  {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8', (err,data)=>{
//             if(err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/1-fs.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
   
//////////////////////////////
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async() =>{
    try {
    //const first = await getText('./content/1-fs.txt')
    //const first = await readFilePromise('./content/1-fs.txt', 'utf8')
    const first = await readFile('./content/1-fs.txt', 'utf8')
    //await writeFilePromise('./content/util.promise-writeFile.txt',`This file has been  written using util.promisify ${first}`)
    await writeFile('./content/util.promise-writeFile.txt',`This file has been  written using util.promisify ${first}`)
    console.log(first)
    } catch (error){
        console.log(error)
    }
}

start()