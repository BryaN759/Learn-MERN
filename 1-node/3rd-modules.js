//Modules
const names = require('./4th-module1')
const sayHi = require('./5th-module2')
const multi = require('./6th-multiExport')

// console.log(names)//the names obj

// console.log(multi)//the multi exported obj


// sayHi('susan')
// sayHi(names.john)   //the export
// sayHi(names.peter)

//direct all without assignment or export because it is an executed function
require('./7th-noInvoke')   
