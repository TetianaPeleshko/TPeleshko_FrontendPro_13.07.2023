// створити піраміду фібоначі

function fibonachy(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fibonachy(n - 1) + fibonachy(n - 2);
  }
}

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += fibonachy(j) + ' ';
    }
    console.log(row);
  }
}

triangle(15);

// В завдвнні написано "створити піраміду фібоначі", а на зображенні намальована піраміда паскаля. Я не зрозуміла, що саме треба порахувати, тож написала рекурсію на розрахунок фібоначі
