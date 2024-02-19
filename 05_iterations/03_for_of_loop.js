const print = (abc) => {
    console.log(abc)
}

const myArray = [1, 2, 3, 4, 5, 6]

for (const i of myArray) { // here i is an iterator which automatically detect the length of array, auto initialize value, auto apply condition and auto update the iterations as we compare to traditional for loop.
    print(i)
}



const myName = "Akon, Hello World!"

for (const str of myName) {
    if (str !== " ") {
        print(`The splited word for myName is: ${str}`)
        continue
    }
}