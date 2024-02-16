/*****************Data Type Summary******************/
// Data types in Java Script 
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



// Non Primitive Data Types
// Arrays, Objects, Functions

let arrays = ["Akon", 5, "Male"]; // arrays data type
let object = {
    name: "Akon",
    age: 5,
    gender: "Male"
}; // object data type

const myFunction = function(){
    console.log("Hello World");
}; // function data type