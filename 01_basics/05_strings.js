// making console.log() shortcut by using normal function with variable
let print = function (abc) {
    console.log(abc)
}
// console.log(typeof print); // display the type of this variable // output => function

// making console.log() shortcut by using arrow function with variable
let display = (xyz) => {
    console.log(xyz + " (by display function)")
}
// console.log(typeof display);// display the type of this variable // output => function
print("") // we can use display("") function as well







const name = " Akon"
const nameObj = new String(name)
const newNameObj = new String('Barak Obama')
const sentence = 'The quick brown fox jumps over the lazy dog.'
const sentence1 = 'The quick brown fox jumps over the lazy dog.'
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
const filePath = 'https://google.com'




display(sentence.replaceAll('o', 'A'))

display(sentence.replace('the', 'A'))

display(sentence.repeat(2))

// display(filePath.raw`https://google.com`) /// dont understand

//
display(sentence.padStart(60, '*').padEnd(80, '*'))
display(sentence.padStart(50, '*'))
display(sentence.padEnd(70, '.'))
//

//
display(name1)
display(name2)
display(name1.normalize('NFC') == name2.normalize('NFC'))
//

display(sentence.matchAll(sentence1)) /// dont understand

display(sentence.match(sentence1))

display(sentence.localeCompare(nameObj)) /// dont understand

display(sentence.link("https://google.com")); //Deprecated. Means, this feature is no longer recommended.

display(sentence.lastIndexOf('dog'));

display(sentence.italics()); // Deprecated. Means, this feature is no longer recommended

display(sentence.isWellFormed()) // it will return boolean value. // output => true

display(sentence.indexOf('quick'))

display(sentence.includes('The', 3)); // it will return the boolean data. it will print false. but if we remove position number then this output will be false. because 5th position there is no 'the' // output => true, 

// display(sentence.fromCodePoint(9731, 9733, 9842, 0x2f804)) /// Dont understand

// display(sentence.fromCharCode(name, nameObj, newNameObj, sentence)); /// Dont understand

display(sentence.fontsize(5)); // Deprecated. Means, this feature is no longer recommended.

display(sentence.fontcolor('red')); // Deprecated. Means, this feature is no longer recommended.

display(sentence.fixed()); //Deprecated. Means, this feature is no longer recommended.

print(sentence.endsWith('end')); // it will return boolean value // output => false,  if the value is 'dog.' then the answer will be true.

display(newNameObj.concat(name));

print(sentence.codePointAt(5));

display(sentence.charCodeAt(0)); /// dont understand

print(sentence.charAt(10));

display(sentence.bold()); // Deprecated. Means, this feature is no longer recommended.

print(sentence.blink()); // Deprecated. Means, this feature is no longer recommended.

display(sentence.big()); // Deprecated. Means, this feature is no longer recommended.

print(sentence.at(4));

// display(anchor(newName)) // Deprecated. Means, this feature is no longer recommended.





print(nameObj.toUpperCase());
display(nameObj.toLowerCase());
print(`Length of nameObj is ${nameObj.length}`);