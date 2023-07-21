let calculate = prompt('What do you whant to do: add, sub, mult, div?');
let firstNum = Number(prompt('Enter the first number:'));
let secondNum = Number(prompt('Enter the second number:'));

let result;
let oper;
switch (calculate) {
  case 'add':
    result = firstNum + secondNum;
    oper = '+';
    break;
  case 'sub':
    result = firstNum - secondNum;
    oper = '-';
    break;
  case 'mult':
    result = firstNum * secondNum;
    oper = '*';
    break;
  case 'div':
    result = firstNum / secondNum;
    oper = '/';
    break;
  default:
      alert('Wrong input');
}

result = +result.toFixed(2)

let outputResult = `${firstNum} ${oper} ${secondNum} = ${result}`;
alert(outputResult);