var userName = prompt("Tell me your name: ");
var numberOne = parseInt(prompt("Give me a number: "));
var numberTwo = parseInt(prompt("Give me another number: "));

function haveANiceDay(name) {
	return "You are going to have a wonderful day, " + name + ". ";
};

function numSum(numOne, numTwo) {
    var sum = numOne + numTwo;
    return "By the way, the sum of your numbers is " + sum + ".";
};

document.write(haveANiceDay(userName) + numSum(numberOne, numberTwo));