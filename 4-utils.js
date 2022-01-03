const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

const func1 = (number) => {
    number = number + 100
    console.log(number)
}

module.exports = { sayHi,func1 }