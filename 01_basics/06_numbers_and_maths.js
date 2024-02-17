const display = function (abc) {
    console.log(abc);
}



// /************************** Numbers ****************************** */

// const num1 = 10000000.025462;

// const num2 = 20;
// const num3 = 5.4;

// const newNum2 = num2.toPrecision(3);
// const newNum3 = num3.toFixed();

// display(((num1 + parseInt(newNum2) + parseFloat(newNum3)).toFixed()).toLocaleString('en-IN'));
// display(((num1 + parseInt(newNum2) + parseFloat(newNum3))).toLocaleString('en-IN'));

// display(num1);
// display(num1.toExponential(2));
// display(num1.toFixed(2));
// display(num1.toLocaleString());
// display(num1.toLocaleString('en-IN'));
// display(num1.toPrecision(3));
// display(num1.toString(3));
// display(num1.toString());

// /*************************** Maths ***************************************** */
// const decimal = 1.0256
// const math = -1
// const math1 = math * Math.PI
// const math2 = 1 * Math.abs(math1)
// const math3 = 1 * Math.max(5, 8, 5, 6, 4, 5)
// const math4 = 1 * Math.min(5, 8, 5, 6, 4, 5)
// const math5 = 1 * Math.floor(decimal)
// const math6 = 1 * Math.random()


// display(math1)
// display(math2)
// display(math3)
// display(math4)
// display(math5)
// display(math6)

// display("")

/******************* Random fun ******************** */

let max = 10
let min = 5

for (i = 1; i < max; i++) {

    let valueFrom20To30 = Math.floor(((Math.random() + 1) * (max - min + 1)) + 19)
    display(valueFrom20To30)
}
