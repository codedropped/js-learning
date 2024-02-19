const print = function (able) {
    console.log(able);
}


/********************* while loop ***********************/

let index = 0
while (index <= 10) {
    print(`Value of index is ${index}`)
    index = index + 2
}

print("--")
let myArray = ["Flash", 'batman', 'superman']

let i = 0

while (i < myArray.length) {
    print(`Value is ${myArray[i]}`)
    i = i + 1
}

/******************** do while loop *********************** */
print("--")

let score1 = 11
do {
    print(`Score is ${score1}`)
    score1++
} while (score1 <= 10);

print("--")

let score = 11
do {
    print(`Score is ${score}`)
    score--
} while (score >= 1);
