
// to using multiple methods is known as chaining

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const chain = newNums.map((num) => num * 10).map((val) => val + 1).filter((sort) => sort > 40)

console.log(chain)