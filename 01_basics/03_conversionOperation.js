let score = 33;

console.log("") // we are using this to make an space into the console to understand our output.

console.log(score); // output => 33
console.log(typeof score); // typeof's systanx // output => number
console.log(typeof(score)); // typeof as method // output => number
console.log("") // we are using this to make an space into the console to understand our output.
// output => blank space

let numberToString = String(score); //converting score value as String // output => 33 (as string)
console.log(numberToString) // output => 33 (as string)
console.log(typeof numberToString); // output => string
console.log("") // we are using this to make an space into the console to understand our output // output => blank space

let text = "55";
console.log(text) // output => 55
console.log(typeof text) // output => string
console.log("") // we are using this to make an space into the console to understand our output // output => blank space

let stringToNumber = Number(text) // output => 55 (as number)
console.log(stringToNumber) // output => 55
console.log(typeof(stringToNumber)) // output => Number
console.log("") // we are using this to make an space into the console to understand our output
// output => blank space

let nullValue = null 
console.log(nullValue); // output => null
console.log(typeof nullValue); // output => object
console.log("") // we are using this to make an space into the console to understand our output
// output => blank space

let undefined; // or let undefined = undefined. both are same
console.log(undefined); // output => undefined (means nothing is defined in this variable)
console.log(typeof undefined); // output => undefined
console.log("") // we are using this to make an space into the console to understand our output
// output => blank space

let blank = ""
console.log(blank) // output => an unclear blank spaces
console.log(typeof blank); // output => string
console.log("") // we are using this to make an space into the console to understand our output
// output => blank space

let alphaNumaric = "45abc"
console.log(alphaNumaric); // output => 45abc
console.log(typeof alphaNumaric); // output => string
console.log("") // we are using this to make an space into the console to understand our output
// output => blank space

let alphaNumaricToNumber = Number(alphaNumaric) 
console.log(alphaNumaricToNumber); // output => NaN(Not a Number)
console.log(typeof alphaNumaricToNumber); // output => number
console.log("") // we are using this to make an space into the console to understand our output

let amount = null
let nullToNumber = Number(amount) 
console.log(nullToNumber); // output => 0
console.log(typeof nullToNumber); // output => number
console.log("") // we are using this to make an space into the console to understand our output

let nullToString = String(amount)
console.log(nullToString); // output => null
console.log(typeof(nullToString)); // output => string
console.log("") // we are using this to make an space into the console to understand our output

let bool = true
console.log(bool); // output => true
console.log(typeof bool); // output => boolean
console.log("") // we are using this to make an space into the console to understand our output

let boolToNumber = Number(bool)
console.log(boolToNumber); // output => 1 (for true) and 0 (for false)
console.log(typeof boolToNumber); // output => number
console.log("") // we are using this to make an space into the console to understand our output

let boolToString = String(bool)
console.log(boolToString); // output => true
console.log(typeof boolToString); // output => string
console.log("") // we are using this to make an space into the console to understand our output

let digit = 1 
let digitToBool = Boolean(digit)
console.log(digitToBool); // output => if 1 then true and if 0 then false
console.log(typeof digitToBool); // output => boolean
console.log("") // we are using this to make an space into the console to understand our output

let age = ""
let ageToBoolean = Boolean(age)
console.log(ageToBoolean); // output => false // though this is empty string and usually it contains empty space but for boolean it shows us false because here need content. So, if we give an space or text between double quotation then the value will true. 
console.log(typeof ageToBoolean); // output => boolean
console.log("") // we are using this to make an space into the console to understand our output

let heading = "heading"
let headingToBoolean = Boolean(heading)
console.log(headingToBoolean); // output => true
console.log(typeof headingToBoolean); // output => boolean
console.log("") // we are using this to make an space into the console to understand our output.


/********************* Operations ************************** */

let text1 = "Hello "
let text2 = "Akon"
let text3 = text1+text2
console.log(text3); // output => Hello Akon

console.log(1+2); // output => 3
console.log(1+"2"); // output => 12
console.log("1"+2); // output => 12
console.log(1+2+"5"); // output => 35
console.log("5"+2+1); // output => 521

console.log(5+(2+96)-15*1/8); // output =>

console.log(true); // output => true
console.log(+true); // output => 1
console.log(+""); // output => true

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.table([num1,num2,num3]) // output => 4,4,4

let gameCount = 100
gameCount++; // postfix
console.log(gameCount); // output => 101

let Count = 100
++Count; // prefix
console.log(Count); // output => 101
