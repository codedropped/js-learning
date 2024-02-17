const display = function (abc) {
    console.log(abc);
}



/************************** Numbers ****************************** */

const num1 = 10000000.025462;

const num2 = 20;
const num3 = 5.4;

const newNum2 = num2.toPrecision(3);
const newNum3 = num3.toFixed();

display(((num1 + parseInt(newNum2) + parseFloat(newNum3)).toFixed()).toLocaleString('en-IN'));
display(((num1 + parseInt(newNum2) + parseFloat(newNum3))).toLocaleString('en-IN'));

display(num1);
display(num1.toExponential(2));
display(num1.toFixed(2));
display(num1.toLocaleString());
display(num1.toLocaleString('en-IN'));
display(num1.toPrecision(3));
display(num1.toString(3));
display(num1.toString());

/*************************** Maths ***************************************** */