const display = function (abc) {
    console.log(abc);
}


/********************************* rest operators in functions ***************************************/

function shoppingCartValue1(value1) {
    return value1;
}

display(shoppingCartValue1(200, 300, 400, 4, 50, 560, 1))
//output => 200

function shoppingCartValue2(...value1) { // this is rest operator(...). If we use in array then this is spread operator and in function this is rest operator 
    return value1;
}

display(shoppingCartValue2(200, 300, 400, 4, 50, 560, 1))
// output=>[200,300,400,4,50,560,1]

function shoppingCartValue3(a, b, ...value1) { // this is rest operator(...). If we use in array then this is spread operator and in function this is rest operator 
    return value1;
}

display(shoppingCartValue3(200, 300, 400, 4, 50, 560, 1))
// output=>[400,4,50,560,1]


/**************************************** function in objects ************************************************************ */


//One type

const obj = {
    name: "akon",
    age: 4
}

function objFunction(myObj) {
    return display(`The name of obj is ${myObj.name} and the age of obj is ${myObj.age}`)
}
objFunction(obj)


// Second Type

function objFunction2(myObj2) {
    return display(`The name of user is ${myObj2.username} and the age of user is ${myObj2.age}`)
}

objFunction2({
    username: "SHB",
    age: 10
})


/************************************************* function in Arrays *********************************************************************** */


// one type

const myArr = [10, 20, 30, "abc"]

function arrFunction(getArr) {
    return display(getArr)
}

arrFunction(myArr[3])

// Second type

function arrFunction2(getArr2) {
    return getArr2[1]
}

display(arrFunction2([10, 50, "a"]))