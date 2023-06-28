// Event Emitter
// on -listens for event, emit - emits the event
// sequence matters. on -> emit

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

 
// customEmitter.on('response', () =>{        // .on method has the event name 'response'
//     console.log(`data recieved `)
// })

// customEmitter.emit('response')             // .emit method passing in the called on .on 


customEmitter.on('response', (name,id) =>{        
    console.log(`data recieved by user ${name},id: ${id}`)
})
    
customEmitter.emit('response', 'Abul', 500) 
