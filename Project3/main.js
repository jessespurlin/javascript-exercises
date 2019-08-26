var numbers = [];
var numSum = 0;

numbers.push(parseInt(prompt("Give a number: "))); 
numbers.push(parseInt(prompt("Give another number: ")));
numbers.push(parseInt(prompt("Give a number again: ")));

document.write("Your array contains: [")
for (var i = 0; i < numbers.length; i++) {
    numSum += numbers[i];
    document.write(numbers[i] + "");
}

document.write("] <br> The sum of all your numbers is: " + numSum);



