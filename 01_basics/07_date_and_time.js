
const display = function (abc) {
    console.log(abc)
}



let date = Date.now()
display(date)

let utcTime = new Date(date)
display(utcTime.toLocaleTimeString())

let prevDate = new Date("1990-11-14")
display(prevDate.getTime())

let newDate = new Date().getDate()
let newDate2 = new Date().getDay()
let newDate3 = new Date().getFullYear()
let newDate4 = new Date().getHours()
let newDate5 = new Date().getMilliseconds()
let newDate6 = new Date().getMinutes()
let newDate7 = new Date().getMonth()
let newDate8 = new Date().getSeconds()
let newDate9 = new Date().getTime()

//.toMethods

let newDate10 = new Date().toISOString()
let newDate11 = new Date().toJSON()
let newDate12 = new Date().toLocaleDateString()
let newDate13 = new Date().toLocaleString()
let newDate14 = new Date().toLocaleTimeString()
let newDate15 = new Date().toString()
let newDate16 = new Date().toTimeString()
let newDate17 = new Date().toUTCString()
let newDate18 = newDate17.toString()

display(newDate17)
display(newDate18)
display(newDate)
display(newDate2)
display(newDate3)
display(newDate4)
display(newDate5)
display(newDate6)
display(newDate7)
display(newDate8)
display(newDate9)
display("")
display(newDate10)
display(newDate11)
display(newDate12)
display(newDate13)
display(newDate14)
display(newDate15)
display(newDate16)
display(newDate17)