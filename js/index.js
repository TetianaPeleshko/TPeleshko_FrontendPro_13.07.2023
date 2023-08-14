// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [
  1,
  2,
  3,
  77,
  '77',
  -5,
  'ff',
  'vfd',
  undefined,
  'd',
  'j',
  -9,
  -12,
  15,
  true,
  null,
];

function averageNum(arr) {
  let arrayOfNumbers = [];

  for (const item of arr) {
    if (typeof item === 'number') {
      arrayOfNumbers.push(item);
    }
  }

  return (
    arrayOfNumbers.reduce((acc, num) => acc + num, 0) / arrayOfNumbers.length
  );
}

let average = averageNum(arr);
console.log(average);

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
let x = Number(prompt('Enter number x:'));
let y = Number(prompt('Enter number y:'));
let znak = prompt('Enter znak:');

function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = x ** y;
      break;
    default:
      alert('Wrong input');
  }
  // result = +result.toFixed(2);
  return result;
}

let outputResult = doMath(x, znak, y);
console.log(outputResult);

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач

let lengthArr = Number(prompt('Enter array length:'));
let heightArr = Number(prompt('Enter array height:'));

function fillArray(lengthArr, heightArr) {
  let filledArray = [];
  for (let i = 0; i < lengthArr; i++) {
    let internalArray = [];
    for (let j = 0; j < heightArr; j++) {
      internalArray.push(prompt(`Enter element number [${i}, ${j}]`));
    }
    filledArray.push(internalArray);
  }
  return filledArray;
}

let newArray = fillArray(lengthArr, heightArr);
console.log(newArray);

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// Option1
let hello = 'Hello world';
let delChar = ['l', 'd'];

function func(inpStr, delChar) {
  let addToArray = inpStr.split('');
  let filteredArray = addToArray.filter((char) => !delChar.includes(char));
  let resultStr = filteredArray.join('');
  return resultStr;
}

let newHello = func(hello, delChar);
console.log(newHello);

// Option2 (changed)

let hello2 = 'Hello world';
let delChar2 = ['l', 'd'];

function remChars(inpStr2, delChar2) {
  let resString = inpStr2;

  for (let char2 of delChar2) {
    resString = resString.split(char2).join('');
  }
  return resString;
}

let newHello2 = remChars(hello2, delChar2);
console.log(newHello2);
