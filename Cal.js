function calculator(){

    let addition = (num1, num2) => num1 + num2;
    let subtraction = (num1, num2) => num1 - num2;
    let multiplication = (num1, num2) => num1 * num2;
    let division = (num1, num2) => num1 / num2;

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let selectedValue = document.getElementById('select-type').value;

    if (selectedValue === 'Addition') {
        document.getElementById('answer').innerHTML = addition(num1, num2);
    }
    else if (selectedValue === 'Subtraction') {
        document.getElementById('answer').innerHTML = subtraction(num1, num2);
    }
    else if (selectedValue === 'Multiplication') {
        document.getElementById('answer').innerHTML = multiplication(num1, num2);
    }
    else if (selectedValue === 'Division') {
        document.getElementById('answer').innerHTML = division(num1, num2);
    }
    else  {
        document.getElementById('answer').innerHTML = 'Please input the first and second number';
    }
}