const print = (abc) => console.log(abc)

// Nullish coalescing Operator (??) : null and undefined

var val1;


val1 = 5 ?? 10
print(val1)
print("--")

val1 = null ?? 10
print(val1)
print("--")

val1 = undefined ?? 15
print(val1)
print("--")

val1 = null ?? undefined ?? 20
print(val1)
print("--")


// Ternary operator (?)
// condition ? true : false

const num = 11

num < 4 ? print("num is less than 4") : num < 5 ? print("num is less then 5") : num <= 10 ? print("num is less than or equal to 10") : print("num is greater than 10")