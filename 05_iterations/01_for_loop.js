const print = (abc) => console.log(abc)

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        print("5 is the best number")
    }
    print(element)
}


for (let m = 0; m <= 10; m++) {
    print("--")
    print(`Outer loop value: ${m}`);
    for (let n = 0; n <= 5; n++) {
        print(`N Inner loop value ${n} and M outer loop ${m}`)
    }
}
for (let m = 0; m <= 10; m++) {
    print("--")
    print(`Outer loop value: ${m}`);
    for (let n = 0; n <= 5; n++) {
        print(m + "*" + n + "=" + m + n);
    }
}


const array = [1, 2, "A", "B", 5]
print(array.length)
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    print(element)

}

const obj = { username: "Akon", age: 5, email: "abc@abc.com", result: [1, 2, "A", "B", 5] }
const objLength = (Object.keys(obj).length)
print(objLength)
for (let index = 0; index < 4; index++) {
    print(Object.keys(obj));
    print(Object.values(obj));
    print(Object.entries(obj));
}
// using Break keyword
for (let index = 0; index < 10; index++) {
    if (index == 5) {
        print(" The value is now 5 detected")
        break // from here iteration will stop
    }
    print(`Value is ${index}`)

}

// using Continue keyword
for (let index = 0; index < 10; index++) {
    if (index == 5) {
        print(" The value is now 5 detected")
        continue // here index 5 will not print but from index 0-10 all will be print except index 5
    }
    print(`Value is ${index}`)

}
