// making console.log() shortcut by using normal function with variable
let print = function (abc) {
    console.log(abc)
}
console.log(typeof print); // display the type of this variable

// making console.log() shortcut by using arrow function with variable
let display = (xyz) => {
    console.log(xyz + " (by display function)")
}
console.log(typeof display);// display the type of this variable
display("") // we can use print("") function as well







const name = "Akon"
const nameObj = new String(name)
const newNameObj = new String('Barak Obama')
const sentence = 'The quick brown fox jumps over the lazy dog.'

// display(anchor(newName)) // Deprecated. Means, this feature is no longer recommended.

print(sentence.at(4));

display(sentence.big()); // Deprecated. Means, this feature is no longer recommended.

print(sentence.blink()); // Deprecated. Means, this feature is no longer recommended.

display(sentence.bold()); // Deprecated. Means, this feature is no longer recommended.

print(sentence.charAt(10));

display(sentence.charCodeAt()); /// dont understand

print(nameObj.toUpperCase());
display(nameObj.toLowerCase());
print(`Length of nameObj is ${nameObj.length}`);
print(newNameObj.concat(name))