// fs module
// const fs = require('fs') //reqular way

//alternate way
const { readFile, writeFile } = require('fs')

readFile('./content/1-fs.txt','utf8', (err,result)=>{
    if(err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/2-fs.txt','utf8', (err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        const second = result 
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )

    })
})

