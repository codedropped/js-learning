const print = (abc) => console.log(abc)


// switch case basic syntax
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }


// for number value
const month = 3

switch (month) {
    case 1:
        print("Month value is : January")
        break;
    case 2:
        print("Month value is : February")
        break;
    case 3:
        print("Month value is : March")
        break;
    case 4:
        print("Month value is : April")
        break;
    case 5:
        print("Month value is : May")
        break;
    case 6:
        print("Month value is : June")
        break;
    case 7:
        print("Month value is : July")
        break;
    case 8:
        print("Month value is : August")
        break;

    default:
        print("default case is match")
        break;
}

print("--")

// for string value

const day = "friday"

switch (day) {
    case "saturday":
        print("Today is : Saturday")
        break;
    case "sunday":
        print("Today is : Sunday")
        break;
    case "monday":
        print("Today is : Monday")
        break;
    case "tuesday":
        print("Today is : Tuesday")
        break;
    case "wednessday":
        print("Today is : Wednessday")
        break;
    case "thursday":
        print("Today is : Thursday")
        break;
    case "friday":
        print("Today is : Friday")
        break;
    default:
        print("You are out of the time")
        break;
}