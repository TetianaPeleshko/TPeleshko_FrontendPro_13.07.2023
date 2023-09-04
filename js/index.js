const products = [
  { id: 'A441', name: 'Pepsi', category: 'Soft Drink', price: 15, quantity: 2 },
  { id: 'B234', name: 'Coke', category: 'Soft Drink', price: 10, quantity: 8 },
  {
    id: 'A617',
    name: 'Mirinda',
    category: 'Soft Drink',
    price: 20,
    quantity: 20,
  },
  {
    id: 'B003',
    name: 'Sprite',
    category: 'Soft Drink',
    price: 16,
    quantity: 5,
  },
  {
    id: 'B225',
    name: 'Minute Maid',
    category: 'Soft Drink',
    price: 25,
    quantity: 12,
  },
  { id: 'A742', name: '5Star', category: 'Chocloate', price: 10, quantity: 3 },
  { id: 'B388', name: 'Appy', category: 'Soft Drink', price: 35, quantity: 9 },
  { id: 'A899', name: 'Gems', category: 'Chocloate', price: 12, quantity: 11 },
  { id: 'B635', name: 'KitKat', category: 'Chocloate', price: 15, quantity: 7 },
  { id: 'B408', name: 'Perk', category: 'Chocloate', price: 8, quantity: 15 },
  {
    id: 'A354',
    name: 'Dairy Milk',
    category: 'Chocloate',
    price: 30,
    quantity: 4,
  },
];

const categContainer = document.getElementById('categories');
const productsContainer = document.getElementById('products');
const productDetailsContainer = document.getElementById('product-details');
const viewOrdersButton = document.getElementById('view-orders-button'); // ID для кнопки перегляду замовлень

const uniqCategories = [];

// Знаходимо унікальні категорії
products.forEach((product) => {
  if (!uniqCategories.includes(product.category)) {
    uniqCategories.push(product.category);
  }
});

// Виводимо категорії
uniqCategories.forEach((category) => {
  const categoryButton = document.createElement('button');
  categoryButton.textContent = category;
  categoryButton.addEventListener('click', () => displayCategory(category));
  categContainer.appendChild(categoryButton);
});

function displayCategory(category) {
  // Очищаємо контейнер товарів та інформації про товар перед виводом
  productsContainer.innerHTML = '';
  productDetailsContainer.textContent = '';

  // Вибираємо елементи з початкового масиву в новий масив для обраної категорії
  const prodInCategory = products.filter(
    (product) => product.category === category
  );

  // Виводимо продукти обраної категорії
  prodInCategory.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.textContent = `${product.name} - ${product.price}`;
    productItem.classList.add('product-item');

    // Додаємо обробник подій для виведення інформації про товар при кліку
    productItem.addEventListener('click', () => displayProductInfo(product));

    productsContainer.appendChild(productItem);
  });
}

function displayProductInfo(product) {
  // Очищаємо контейнер інформації про товар перед виводом
  productDetailsContainer.textContent = '';

  // Виводимо інформацію про товар справа
  const productInfo = document.createElement('div');
  productInfo.textContent = `
    Name: ${product.name} Category: ${product.category} Price: ${product.price} Quantity: ${product.quantity}`;

  const buyButton = document.createElement('button');
  buyButton.textContent = 'Купити';
  buyButton.classList.add('buy-button'); // Додали клас для стилізації
  buyButton.addEventListener('click', () => buyProduct(product));

  productDetailsContainer.appendChild(productInfo);
  productDetailsContainer.appendChild(buyButton);
}

function buyProduct(product) {
  // Виводимо повідомлення про купівлю
  alert(`Товар "${product.name}" куплений!`);

  // Викликаємо функцію для додавання придбаного товару до localStorage
  addOrdersToLocalStorage(product);

  // Повернення до вихідного стану (лише список категорій)
  productsContainer.innerHTML = '';
  productDetailsContainer.innerHTML = '';
}
// додаємо обробник подій для кнопки перегляду замовлень
viewOrdersButton.addEventListener('click', displayOrders);

const returnCategories = document.getElementById('return-categories');
returnCategories.addEventListener('click', () => {
  // Відображаємо контейнер категорій
  categContainer.style.display = 'block';
});

// функція для додавання замовлень до localStorage
function addOrdersToLocalStorage(product) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(product);
  localStorage.setItem('orders', JSON.stringify(orders));
}

// функція для виведення збережених замовлень на сторінку
function displayOrders() {
  // очищаємо контейнери перед виведенням інформації про замовлення
  productsContainer.innerHTML = '';
  productDetailsContainer.innerHTML = '';

  // ховаємо контейнер категорій
  categContainer.style.display = 'none';

  // отримуємо збережені замовлення з localStorage
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  if (orders.length === 0) {
    const noOrdersMessage = document.createElement('div');
    noOrdersMessage.textContent = 'Немає збережених замовлень';
    productDetailsContainer.appendChild(noOrdersMessage);
  } else {
    orders.forEach((order) => {
      const orderInfo = document.createElement('div');
      orderInfo.textContent = `Замовлено: ${order.name} Ціна: ${order.price}`;
      // productDetailsContainer.appendChild(orderInfo);

      // елемент для розгортання деталей замовлення при кліку
      const expandButton = document.createElement('button');
      expandButton.textContent = 'Розгорнути деталі';
      expandButton.addEventListener('click', () => displayOrderDetails(order));

      // додаємо елемент до контейнера
      productDetailsContainer.appendChild(orderInfo);
      productDetailsContainer.appendChild(expandButton);

      // кнопка видалення замовлення
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', () => deleteOrder(order));

      // додаємо кнопку видалення до контейнера
      productDetailsContainer.appendChild(deleteButton);
    });
  }
}

// відображення деталей замовлення
function displayOrderDetails(order) {
  // очищаємо контейнери деталей замовлення перед виведенням
  productDetailsContainer.innerHTML = '';

  // Створюємо деталі замовленн. Дата та ціна
  const orderData = document.createElement('div');
  orderData.textContent = `Дата: ${new Date().toLocaleDateString()}`;

  const orderPrice = document.createElement('div');
  orderPrice.textContent = `Ціна: ${order.price}`;

  // Додаємо елементи до контейнера
  productDetailsContainer.appendChild(orderData);
  productDetailsContainer.appendChild(orderPrice);
}

// функція для видалення замовлення
function deleteOrder(order) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  // видаляємо по індексу
  const indexToDelete = orders.findIndex((o) => o.id === order.id);

  if (indexToDelete !== -1) {
    orders.splice(indexToDelete, 1);
    // оновлюємо localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrders();
  }
}
