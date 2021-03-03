// User input here.
let userInput = prompt("Enter your even number or odd number to see their status: ");

//Conversion of String to Integer.
userInput = parseInt(userInput);

// Set condition here what is even or odd number.
if (userInput % 2 == 0) {
    document.write('The number is input by you: ' + userInput + ', is even number.');
}
else {
    document.write('The number is input by you: ' + userInput + ', is odd number.');
}
