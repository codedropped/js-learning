const print = function (a) {
    console.log(a)
}


let arr = [1, 2, [3, 4, 5], 6, [7, 8, 9], 10, 11, 12, [13, 14, 15, [16, 17, 18]]]
let arr2 = ["A", "B", "C", "D", "E", "F"]
print(arr.flat(Infinity))
let concatedArr = arr.concat(arr2)
print(concatedArr) // this will make a copy of main array
print(arr)

arr.push(arr2) // this will use reference of main array and change main array
print(arr)

print(arr[2][1])

const spreadArr = [...arr2, ...arr];

let flatedArr = spreadArr.flat(Infinity)
print(flatedArr)

let uniqueValue = new Set(flatedArr)
print(uniqueValue)

print(Array.isArray("uniqueValue"))
print(Array.from("uniqueValue"))
print(Array.of(...arr2, ...arr))