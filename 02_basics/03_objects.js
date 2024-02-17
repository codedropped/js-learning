//Singleton

//Object literals

const display = function (x) {
    console.log(x);
}

const obj = {
    "full name": "Rich Akon",
    nickName: "Akon",
    age: 5,
    roll: 1,
    gender: "Male",
    isLoggedIn: true,
    loggedDays: ["Saturday", "Friday"]
}

display(obj)
obj.email = "akon@123.com"
display(obj)

