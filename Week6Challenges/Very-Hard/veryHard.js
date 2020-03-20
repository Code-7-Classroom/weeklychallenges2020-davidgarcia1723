var input = prompt("Please enter a number.");
var input2 = prompt("Please enter another number.");
var inputOperator = prompt("Please enter an operator.");

switch(inputOperator.toString()) {
    case '+':
    console.log(input +  " + " + input2 + " = " + (parseInt(input) + parseInt(input2)));
    break;

    case '-':
    console.log(input +  " - " + input2 + " = " + (parseInt(input) - parseInt(input2)));
    break;

    case '*':
    console.log(input +  " * " + input2 + " = " + (parseInt(input) * parseInt(input2)));
    break;

    case '/':
    console.log(input +  " / " + input2 + " = " + (parseInt(input) / parseInt(input2)));
    break;
}