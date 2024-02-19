const print = function (parameter) {
    console.log(parameter);
}


const obj = new Object; // singleton object
const obj1 = {} // this is empty object. but literal objects

print(obj)
print(obj1)

const tong = {}

tong.id = "abc123"
tong.nickName = "Akon"
tong.age = 4
tong.gender = "M"
tong.email = "email@email.com"
const symbol = Symbol("keys")
tong[symbol] = "keys1"

print(tong)

let onjInObjInObj_NestedObj = {
    Id: 154,
    name: "Akon",
    family: {
        fatherName: "SHB",
        fathersFamily: {
            fatherName: "GUA",
            motherName: "RAR",
        },
        motherName: "RS",
        mothersFamily: {
            fatherName: "MRS",
            motherName: "SS"
        }
    }
}

print(onjInObjInObj_NestedObj)

print(onjInObjInObj_NestedObj.family.fathersFamily)
print(onjInObjInObj_NestedObj.family.mothersFamily)

let obj3 = { 1: "a", 2: "b", 3: "c" }
let obj4 = { 4: "a", 5: "b", 6: "c" }

let obj5 = { obj3, obj4 }
print(obj5)

let obj6 = Object.assign(obj3, obj4) // here if we mention obj3 as target then all the key value will assign into obj3, but, obj4 will remain as it is.

print(obj6)
print(obj3) // obj3 inharit all (obj3 and obj4) keys and value into it.
print(obj4) // its remains as it was.

// but if we assign an empty object as target then this all values will stored into that empty object and other objects will be as it is. 

let obj7 = { 7: "a", 8: "b", 9: "c" }
let obj8 = { 10: "a", 11: "b", 12: "c" }

let obj9 = Object.assign({}, obj7, obj8)
print(obj9)
print(obj7)
print(obj8)

// another combine methods (Using Spread datatype)

let obj10 = { ...obj7, ...obj8 }

print(obj10)
print(obj7)
print(obj8)

let obj11 = { 13: "a", 14: "b", 15: "c" }

print(Object.keys(obj11))
print(Object.values(obj11))
print(Object.entries(obj11))

let obj12 = [
    {
        name: "b",
        age: 1
    },
    {
        name: "c",
        age: 2
    },
    {
        name: "d",
        age: 3
    },
    {
        name: "e",
        age: 4
    },
]

print(obj12)
print(obj12[0].name)
print(obj12[2].age)
print(obj12[3])



/**************************** Object De-Structuring ******************************** */


const { email: mail } = tong //  here email is the key of tong object and we shorter the name mail from email. now we can call mail instead of email to get the value.

print(mail)