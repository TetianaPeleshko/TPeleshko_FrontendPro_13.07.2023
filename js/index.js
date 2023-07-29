// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let strNum = [];

for (let i = 20; i <= 30; i += 0.5) {
  strNum.push(i);
}
alert(strNum.join(' '));

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let exchangeRate = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  const uah = dollars * exchangeRate;
  console.log(`${dollars} доларів = ${uah} гривень`);
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let entN = Number(prompt('Enter an integer:'));

for (let j = 1; j <= 100; j++) {
  if (j * j <= entN) {
    console.log(j);
  } else {
    break;
  }
}

//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
let numInteger = Number(prompt('Enter an integer:'));
let prime = true;
if (numInteger <= 1) {
  prime = false;
} else {
  for (let n = 2; n <= numInteger / 2; n++) {
    if (numInteger % n === 0) {
      prime = false;
    }
  }
}
if (prime) {
  console.log(`${numInteger} is a prime number`);
} else {
  console.log(`${numInteger} is not a prime number`);
}

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let someNum = Number(prompt('Enter a number:'));
let power;

for (let p = 0; 3 ** p <= someNum; p++) {
  power = p;
}
if (3 ** power === someNum) {
  console.log(
    `${someNum} can be obtained by reducing the number 3 to a certain number`
  );
} else {
  console.log(
    `${someNum} can't be obtained by reducing the number 3 to a certain number`
  );
}
