// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
// Знайти суму та кількість позитивних елементів

let numPositNumbers = numbers.filter((item) => item > 0).length;
// option_1
let sumPositNumbers = numbers
  .filter((item) => item > 0)
  .reduce((acc, num) => acc + num, 0);

console.log(numPositNumbers);
console.log(sumPositNumbers);

// option_2
let sumPositNumbers2 = 0;
for (let i of numbers) {
  if (i > 0) {
    sumPositNumbers2 += i;
  }
}
console.log(sumPositNumbers2);

// Знайти мінімальний елемент масиву та його порядковий номер
let minValue = Math.min(...numbers);
let seqNumber = numbers.indexOf(minValue);
console.log(minValue);
console.log(seqNumber);

// Знайти максимальний елемент масиву та його порядковий номер

let maxValue = numbers.reduce((max, cur) => {
  return max > cur ? max : cur;
});
let seqNumberMax = numbers.indexOf(maxValue);
console.log(maxValue);
console.log(seqNumberMax);

// Визначити кількість негативних елементів
let numNegNumbers = numbers.filter((item) => item < 0).length;
console.log(numNegNumbers);

// Знайти кількість непарних позитивних елементів
// Знайти суму непарних позитивних елементів

let count1 = 0;
let sumOdd = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 !== 0) {
    count1++;
    sumOdd += numbers[i];
  }
}
console.log(
  `кількість непарних позитивних елементів ${count1}, сума непарних позитивних елементів ${sumOdd}`
);

// Знайти кількість парних позитивних елементів
// Знайти суму парних позитивних елементів
let count2 = 0;
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] % 2 === 0) {
    count2++;
    sum += numbers[i];
  }
}
console.log(
  `кількість парних позитивних елементів ${count2}, сума парних позитивних елементів ${sum}`
);

// Знайти добуток позитивних елементів

let product = 1;
let posElement = numbers.map((num) => {
  if (num > 0) {
    product *= num;
  }
});
console.log(`добуток позитивних елементів ${product}`);

// Знайти найбільший серед елементів масиву, остальні обнулити.

let maxValue2 = numbers.reduce((max, cur) => {
  return max > cur ? max : cur;
});

for (let j = 0; j < numbers.length; j++) {
  if (numbers[j] !== maxValue2) {
    numbers[j] = 0;
  }
}

console.log(maxValue2);
console.log(numbers);
