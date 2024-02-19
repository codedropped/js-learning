
const print = (abc) => (console.log(abc))

// if statement

const isUserLoggedIn = true
const temperature = 40

// if (isUserLoggedIn) {

// }

if (3 != 2) {
    let output = (3 != 2)
    print("")
    print(`3 is not equal to 2 : ${output}`);
}

if (2 == "2") { // here it will check only value
    let output = (2 == "2")
    print("")
    print(`2 is equal to 2 : ${output}`);
}

if (2 === "2") { // here it will check value and type
    let output = (2 == "2")
    print("")
    print(`2 is equal to 2 : ${output}`);
}

if (temperature < 50) {
    let output = (temperature < 50)
    print("")
    print(`temperature is less than 50 : ${output}`);
} else {
    print("")
    print(`temperature is greater than 50`);
}

// <, >, <=,>=, !=, ==, ===, !==, 

const score = 200;

if (score > 100) {
    const power = "fly"
    print("")
    print(`User power is : ${power}`)
}
// print(`User power is : ${power}`) // this will not execute because of local scope/block scope variable.

// if (score < 500) print(`Score is less than 500`), print(`Score is less than 500`); // its not a good practice

/************************* Nesting IF ******************************/
const balance = 460

if (balance > 500) {
    print("")
    let output = (balance > 500)
    print(`balance is greater than 500 : ${output}`);
} else if (balance < 200) {
    print("")
    let output = (balance < 200)
    print(`balance is less than 500 : ${output}`);
} else if (balance < 350) {
    print("")
    let output = (balance < 350)
    print(`balance is less than 350 : ${output}`);
} else if (balance == 450) {
    print("")
    let output = (balance == 450)
    print(`balance is equal to 450 : ${output}`);
} else if (balance !== 450) {
    print("")
    let output = (balance !== 450)
    print(`balance is not equal to 450 : ${output}`);
} else {
    print("")
    print(`balance is : ${balance}`);
}


const userLoggedIn = true
const debitCard = true
const age18 = false

if (userLoggedIn && debitCard) { // here both conditions must must need to be true 
    print("")
    print(`userloggedin is : ${userLoggedIn} and debitcard details is: ${debitCard}`)
}

if (userLoggedIn && debitCard && age18) { // here logic shift to else 
    print("")
    print(`userloggedin is : ${userLoggedIn} and debitcard details is: ${debitCard} or age  is: ${age18}`)
} else {
    print("")
    print(`user is below 18`)
}

if (userLoggedIn && debitCard || age18) { // here logic shift to else 
    print("")
    print(`userloggedin is : ${userLoggedIn} and debitcard details is: ${debitCard} or age  is: ${age18}`)
} else {
    print("")
    print(`user is below 18`)
}