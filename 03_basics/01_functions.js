
const display = function (variable) { // this is anonymous function
    console.log(variable);
}

// console.log("A");
// console.log("k");
// console.log("o");
// console.log("n");

function abc() { } //syntax for declaration of a type of function()

function name() {
    console.log("A");
    console.log("k");
    console.log("o");
    console.log("n");
} // this is functions defination

name // this is the reference of that function. it will not display any value. because it will not executed.
name() // this is the functions execution

function abc(a, b) { } // syntax for another type of function(). here a,b is the parameter

function calculation(num1, num2) {
    num1 + num2
}

calculation() // this function will not execute. because we dont use "console.log()"" to print this function into add() function or we dont return anything from the function. 

console.log(calculation()) // output => undefined. Because nothing is define into add() function as arguments. becauseof we assign parameter into the function so we must declare arguments as per parameter if we want to use this function reference. otherwise this function is useless.

console.log(calculation(5, 2)) // output => undefined. Because we dont return the todo statements of this functions body. 

function add(num1, num2) {
    return num1 + num2 // it means it will return this todo statements
}

console.log(add(2, 5)) // Now it will execute 100%. as per function

//we can also write and return something like below

function sum(num1, num2) {
    let calculation = num1 + num2
    return calculation
}

console.log(sum(5, 5))

display("")

/************************* using return ******************************/

function substract(a, b) {
    let a2b = a - b
    let num = 10
    return a2b
    console.log("It is not working")
    let ab = ("value of ab : " + ab + num) // here this todo is not work. because in function after return keyword nothing will be executed. but if we use this todo before return keyword then, it will 100% executed
}

display(substract(10, 5))

display("")

function substract2(c, d) {
    let c2d = c - d
    let num = 20
    let cd = ("value of cd: " + (c2d + num)) // here it will 100% executed
    console.log("It is working")
    return cd
}

display(substract2(5, 10))

display("")

function greeting(name) {
    // return `${name} you can do this` // we can use this or can use below
    let blessing = `${name} you can do `
    return blessing
}

let programName = "JavaScript"
display(greeting("Akon") + programName)



