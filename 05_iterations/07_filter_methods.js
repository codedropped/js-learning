
// using filter method
const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const newNumsArr = numsArr.filter((value) => value >= 10)
console.log(newNumsArr)


const newNums = numsArr.filter((value) => {
    value <= 10
})

console.log(newNums) // output empty array. Because we use {} so to return this we must need to use return keyword into the scope. So, if we use return then problem will solve.

const newNums2 = numsArr.filter((value) => {
    return value <= 10
})

console.log(newNums2) // output normal.


//using forEach loop to do this same output
const newArry = []

numsArr.forEach((values) => {
    if (values <= 10) {
        newArry.push(values)
    }
})

console.log(newArry) // output normal



//using filter in objects
const types = [
    {
        color: 'purple',
        type: 'minivan',
        registration: 'Wed',
        capacity: 7
    },
    {
        color: 'red',
        type: 'station wagon',
        registration: 'Sat',
        capacity: 4
    },
    {
        color: 'yellow',
        type: 'minivan',
        registration: 'Tue',
        capacity: 7
    },
    {
        color: 'red',
        type: 'station wagon',
        registration: 'Fri',
        capacity: 9
    },
    {
        color: 'green',
        type: 'van',
        registration: 'Wed',
        capacity: 7
    },
    {
        color: 'red',
        type: 'station wagon',
        registration: 'Sat',
        capacity: 5
    },

]

const filter = types.filter((value) => value.color === 'red' && value.capacity === 5)

console.log(filter)