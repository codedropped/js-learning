/*****************DataType Summary******************/

// Two types of Data Types

// Primitive Data Types
// These are the following data types::
// String, Number, Boolean, undefined, null, bigInt, symbol

let string = "Akon"; // String data type
let number = 23; // Number data type
let boolean = true; // Boolean data type
let undefined; // undefined data type
let nullValue = null; // null data type
let bigInt = 354648946464313646n; // bigInt data type
let symbol = Symbol("321"); // symbol data type
let anotherSymbol = Symbol("321"); // symbol data type

console.log(symbol === anotherSymbol); // output => false


// Non Primitive or Reference Data Types
// Arrays, Objects, Functions

let arrays = ["Akon", 5, "Male"]; // array object data type
console.log(typeof arrays);

let object = {
    name: "Akon",
    age: 5,
    gender: "Male"
}; // object data type
console.log(typeof object);

const myFunction = function(){
    console.log("Hello World");
}; // function data type
console.log(typeof myFunction);



/********************* Memory ********************* */

// Two types of Memories

//Stack Memory and Heap Memory

// Stack Memory: All primitive datatypes memory goes to Stack Memory

// like

let name = "Akon"
let newName = name
newName = "India"

console.log(name);
console.log(newName);
// here name output is not changed but newName output changed. Because we assign new value for newName. So it will dont effect our name variables value. It means newName = name is just a copy of name. So when we change newName value then it will store its new value for itself and leave name variable value as it is.


// Heap Memory: All non primitive or reference data types memory goes to Heap memory.

let playerOne = {
    name: "sachin",
    run: 100
}

let playerTwo = playerOne

console.log(playerOne);
console.log(playerTwo);
// Here the output of this two variable are same. No changes.

// let assign playerTwo's name different
playerTwo.name = "Virat"

console.log(playerOne);
console.log(playerTwo);

// Now the value of name of this two variables has been changed. Because whenever we assign value for any non-primitive datatypes then it will go to heap memory. So that it we assign any value in a variable and then assign it again for another variable then those values are equal. But if we change any value using new variable then it will change all the heap memories value related to this variables.  