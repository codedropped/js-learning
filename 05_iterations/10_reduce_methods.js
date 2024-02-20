
// using reduce methods

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const total = arr.reduce((acc, val) => acc + val, 0)

console.log(total)

const totalAmount = arr.reduce(function (acc, val) {
    acc + val
    return
}, 0)

console.log(total)



//reduce methods in object+array
const cart = [
    {
        'course name': 'js programming',
        'price': 200
    },
    {
        'course name': 'Python programming',
        'price': 400
    },
    {
        'course name': 'DSA programming',
        'price': 7000
    },
    {
        'course name': 'Data science programming',
        'price': 10000
    },
]
//simple way
const totalCartPrice = cart.reduce((acc, item) => acc + item.price, 0)
console.log(totalCartPrice)


//second way
const totalCoursePrice = cart.map((name) => name.price).reduce((acc, value) => acc + value, 0)
console.log(totalCoursePrice)