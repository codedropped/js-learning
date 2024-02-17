const display = function (abc) {
    console.log(abc);
}


const arr = [1, 2, 3, 4, 5]
const myarr = new Array(6, 7, 8, 9)
const stringArr = ["A", "B", "C", "D", "E"]
const arrObj = {
    name: "F",
    age: 10,
    roll: 11,
    gender: "G"
}
display(typeof arr)
display(typeof myarr)
display(typeof stringArr)
display(typeof arrObj)


display(arr[4])
display(myarr.concat(arr))
display(stringArr.slice(1, 3))
display(stringArr)
display(arrObj.name)
display(stringArr.splice(1, 3))
display(stringArr)


display(myarr.includes(8))
display("A " + myarr.indexOf(9))
display(myarr.push(0))
display(myarr)
display(myarr.pop())
display(myarr.pop())
display(myarr)
display(myarr.unshift("unshifted"))
display(myarr)
display(myarr.shift())
display(myarr)

