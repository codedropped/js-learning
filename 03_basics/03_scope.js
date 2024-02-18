const print = function (display) {
    console.log(display);
}




let a = 10; // this is global scope variable

if (true) {
    let a = 300
    let b = 50
    let c = 100

    print(`the local scope value of a is: ${a}`) // this is local scope variable
    print(`the local scope value of b is: ${b}`) // this is local scope variable
    print(`the local scope value of c is: ${c}`) // this is local scope variable
}

print(`The global scope value of a is: ${a}`)

/*************************** nested function scope ***********************************************/

function one() {
    const username = "Akon"
    function two() {
        const age = 5
        let gender = "Male"
        print(username)
        return age
    }
    two()
    // print(age)
    // print(gender)
}
one()

// print(username)
// print(age)
// print(gender)


/*************************** nested if statement scope *******************************************/

if (true) {
    const username = "Akon"
    if (username === "Akon") {
        const age = 5
        const gender = "male"
        print(username)
    }

    // print(age)
    // print(gender)
}

// print(username)