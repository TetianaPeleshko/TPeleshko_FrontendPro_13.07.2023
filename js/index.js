//  Task 1.1 Hours to seconds

let hours = prompt('Enter the number of hours');
let seconds = hours * 3600;
alert(seconds);


//  Task 1.2 Hours to seconds

let hours2 = prompt('Enter the number of hours');
let seconds2 = hours2 * 3600;
let resultTime2 = seconds2;
alert(resultTime2);

// обидва варіанти працюють. Питання чи потрібен рядок let resultTime2 = seconds2;?

// Task2.1
let firstNumber = parseFloat(prompt('Enter the first number:'));
let secondNumber = parseFloat(prompt('Enter the second number:'));
let thirdNumber = parseFloat(prompt('Enter the third number:'));
let resultNumbers = (firstNumber + secondNumber + thirdNumber) / 3;
alert(`Середнє арифметичне: ${resultNumbers}`);


// Task2.2
let firstNum = Number(prompt('Enter the first number:'));
let secondNum = Number(prompt('Enter the second number:'));
let thirdNum = Number(prompt('Enter the third number:'));
let resultNums = (firstNum + secondNum + thirdNum) / 3;
alert(`Середнє арифметичне: ${resultNums}`);
