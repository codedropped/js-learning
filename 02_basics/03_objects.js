//Singleton

//Object literals

const display = function (x) {
    console.log(x);
}

let symbol = Symbol("keys")
const obj = {
    "full name": "Rich Akon",
    nickName: "Akon",
    age: 5,
    roll: 1,
    gender: "Male",
    isLoggedIn: true,
    loggedDays: ["Saturday", "Friday"]
}

display(obj)
obj.email = "akon@123.com" // to add key and value into the object then we can use like this syntax
display(obj)

obj.function = function () {
    console.log("Hello JS Learner");
}

display(obj)

obj.functionTwo = function () {
    display(`Hello ${this.nickName}, JS learner`)
}

display(obj)

obj[symbol] = "mySymbol" // to add symbol into the object then we must need to call like this. no other ways.

display(obj)

display(obj.nickName) // this is common
display(obj["age"]) // this can be second options
display(obj["full name"]) // this must need to use if we want to call this types of string
display(obj[symbol]) // to call symbol we must need to call like this.

Object.freeze(obj["full name"]) // it will not work or can say wrong syntax
obj["full name"] = "Richi Rich"
obj.age = 3
display(obj)

Object.freeze(obj) // when we freeze the object then nothing can be change into the object
obj.age = 4
obj["full name"] = "Richi Rich"
obj.nickName = "Tiger"
obj.roll = 4
obj.gender = "Female"
obj.isLoggedIn = false
obj.email = "email@mail.com"
obj.functionThree = function () {
    console.log("This is function three");
}

display(obj)