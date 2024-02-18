
const print = (display) => (console.log(display)) // implicit return

/************************** THIS ***************************** */
const user = {
    username: "Akon",
    price: 9999999999999,

    welcomeMessage: function () {
        const username = "SHB"
        console.log(`${this.username}, welcome to JS`)
        print(this)

    },
}
print(user)

print(this)//empty object

user.welcomeMessage()
user.username = "Bip"
user.welcomeMessage()

function one() {
    const name = "Bip"
    print(this)
}

one()

function two() {
    const name = "Bip"
    print(this.name)
}
two() // output => undefined // this keyword is not only working in function. it will work in the object only.

/************************ Arrow function ************************** */

const arrowFun = () => {
    const name = "Akon"
    print(this)
}

arrowFun()

const arrowFunction = (num1, num2) => {
    return num1 + num2
}

print(arrowFunction(5, 10))


const arrowFunc = (num1, num2) => (num1 + num2) // implicit return

print(arrowFunction(1, 2))

const arrowFuncObj = (num1, num2) => ({ username: "Akon" }) // implicit return

print(arrowFuncObj(1, 2))

const array = [1, 2.5, 3, 5]

array.forEach(function () { }) // we can use function in array like this as well
array.forEach(() => { }) // we can use function in array like this as well
// array.forEach(() => ()) // we can use function in array like this as well