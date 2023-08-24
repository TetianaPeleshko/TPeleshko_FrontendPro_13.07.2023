const tableBody = document.getElementById('tableBody');

for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');

  for (let j = 0; j < 10; j++) {
    const cell = document.createElement('td');
    const cellNum = i * 10 + j + 1;
    cell.textContent = cellNum;
    row.appendChild(cell);
  }
  setTimeout(() => tableBody.appendChild(row), 1000 * i); //Додала setTimeout щоб перевірити на дінамічність додавання
}
