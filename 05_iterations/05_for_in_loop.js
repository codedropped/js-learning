
// forin loop for obj
const obj = {
    '1st book': 'ABC',
    '2nd book': 'DEF',
    '3rd book': 'GHI',
    '4th book': 'JKL',
    age: 5

}


for (const key in obj) {
    console.log(key, obj[key])
}


// forin loop for array 
const arr = [1, 2, 3, 4, 5, 6, 7, 'ab', 'b', 'd', "y"]

for (const key in arr) {

    console.log(key, arr[key]);

}