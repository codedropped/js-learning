

// foreach loop for array
const arr = [1, 2, 3, 4, 5, 6, 7, 'ab', 'b', 'd', "y"]

// foreach loop using normal anonymous function 

arr.forEach(function (item) {
    console.log(item)
});

console.log("--")

// foreach loop using arrow function

arr.forEach((val) => {
    console.log(val)
})

//for each loop for an object

const book =
    [
        {
            '1st book': 'ABC',
            '2nd book': 'DEF',
            '3rd book': 'GHI',
            '4th book': 'JKL',
            age: 5

        },
        {
            '1st book': 'ABC',
            '2nd book': 'DEF',
            '3rd book': 'GHI',
            '4th book': 'JKL'
        },
        {
            '1st book': 'ABC',
            '2nd book': 'DEF',
            '3rd book': 'GHI',
            '4th book': 'JKL'
        },
        {
            '1st book': 'ABC',
            '2nd book': 'DEF',
            '3rd book': 'GHI',
            '4th book': 'JKL'
        },
    ]

book.forEach((key) => {
    console.log(key['1st book'])
    console.log(key.age)
})