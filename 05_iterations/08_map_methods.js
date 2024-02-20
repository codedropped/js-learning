
// using map methods
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num) => num + 10)
const newNums2 = myNums.map((num) => {
    return num + 10
})

console.log(newNums)
console.log(newNums2)



//using forEach loop to do this same job

const newArr = []

myNums.forEach((val) => {
    newArr.push(val + 10)
})

console.log(newArr)
