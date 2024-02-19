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
        // print(`N Inner loop value ${n} and M outer loop ${m}`)
    }
    print(i + "")
}
