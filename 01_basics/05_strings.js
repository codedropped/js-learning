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
display(`Length of name is ${name.length}`)
print(nameObj.toUpperCase());
display(nameObj.toLowerCase());
print(`Length of nameObj is ${nameObj.length}`);

const newName = new String('Barak Obama')

display(name);
print(nameObj);
display(newName);

print(nameObj)
display(newName)

display(newName.concat(name))

