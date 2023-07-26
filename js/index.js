//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let strNum = [];
for (let step = 10; step <= 20; step++) {
  strNum.push(step);
}
alert(strNum);

//Вивести квадрати чисел від 10 до 20.
for (let step1 = 10; step1 <= 20; step1++) {
  let square = step1 ** 2;
  console.log(square);
}

//Вивести таблицю множення на 7
for (let i = 1; i <= 10; i++) {
  let result = 7 * i;
  console.log(`7 * ${i} = ${result}`);
}

//Знайти суму всіх цілих чисел від 1 до 15
let sum1 = 0;
for (let j = 1; j <= 15; j++) {
  sum1 += j;
}
console.log(`Сума всіх цілих чисел від 1 до 15: ${sum1}`);

//Знайти добуток усіх цілих чисел від 15 до 35
let sum2 = 1;
for (let u = 15; u <= 35; u++) {
  sum2 *= u;
}
console.log(`Добуток усіх цілих чисел від 15 до 35: ${sum2}`);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let sum3 = 0;
let n = 500;
for (let k = 1; k <= n; k++) {
  sum3 += k;
}
let average = sum3 / n;
console.log(`Середнє арифметичне всіх цілих чисел від 1 до 500: ${average}`);

//Вивести суму лише парних чисел в діапазоні від 30 до 80 (Варіннт1)
let sum4 = 0;
for (let s = 30; s <= 80; s++) {
  if (s % 2 === 0) {
    sum4 += s;
  }
}
console.log(`Сума парних чисел в діапазоні від 30 до 80: ${sum4}`);

//Вивести суму лише парних чисел в діапазоні від 30 до 80 (Варіннт2)
let sum5 = 0;
for (let s = 30; s <= 80; s += 2) {
  sum5 += s;
}
console.log(`Сума парних чисел в діапазоні від 30 до 80: ${sum5}`);

//Вивести всі числа в діапазоні від 100 до 200 кратні 3
for (let f = 100; f <= 200; f++) {
  if (f % 3 === 0) {
    console.log(`Числа в діапазоні від 100 до 200 кратні 3: ${f}`);
  }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let num = Number(prompt('Entera natural number:'));
let allDiv = [];
let counter = 0;
let sum = 0;
for (let p = 2; p < num; p++) {
  if (num % p === 0) {
    allDiv.push(p);
    //Визначити кількість його парних дільників
    if (p % 2 === 0) {
      counter++;
      //Знайти суму його парних дільників
      sum += p;
    }
  }
}
alert(allDiv);
alert(counter);
alert(sum);

//Надрукувати повну таблицю множення від 1 до 10
for (let j = 1; j <= 10; j++) {
  for (let i = 1; i <= 10; i++) {
    let result = j * i;
    console.log(`${j} * ${i} = ${result}`);
  }
}
