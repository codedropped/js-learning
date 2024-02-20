const print = (abc) => {
    console.log(abc)
}



// for of loop for array
const myArray = [1, 2, 3, 4, 5, 6]

for (const i of myArray) { // here i is an iterator which automatically detect the length of array, auto initialize value, auto apply condition and auto update the iterations as we compare to traditional for loop.
    print(i)
}


// for of loop for string 

const myName = "Akon, Hello World!"

for (const str of myName) {
    if (str !== " ") {
        print(`The splited word for myName is: ${str}`)
        continue
    }
}


// for of loop in object in upper way will not work

// const obj = {
//     'name': 'Akon',
//     'age': 5,
//     'gender': 'Male',
// }

// print(obj)

// for (const key of obj) {
//     print(obj)
// }



// but this way we can use for of loop in an object, but the better way to use it is "for in loop" 
// for of loop for object

const obj = {
    'name': 'Akon',
    'age': 5,
    'gender': 'Male',
}

print(obj)

const objArry = Object.entries(obj)

print(objArry)

for (const [key, value] of objArry) {
    print(`The key is: ${key} and value is: ${value}`)
    print(`${key}, ${value}`)
}