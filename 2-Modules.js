//Modules
//Every File in Node is a Module

const names = require('./3-names')
const sayHi = require('./4-utils')
console.log(names.abhi)
console.log(names[0])

// for(key in names){
//     if(names[key] != undefined){
//         console.log(key)
//     }

// }

setInterval(()=>{
    sayHi.func1(10)
}, 1000)
//sayHi.func1(10)
sayHi.sayHi('abhi')
// sayHi(shiv)
// sayHi('tanvi')
