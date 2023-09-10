'use strict';

const apiUrl = 'https://jsonplaceholder.typicode.com';

// Введення числа
document.getElementById('serchButton').addEventListener('click', () => {
  // Отримуємо значення ідентифікатора поста з поля введення
  const postId = document.getElementById('postIdInput').value;
  if (!postId || postId < 1 || postId > 100) {
    alert('Введить ідентифікатор поста від 1 до 100');
    return; // Припиняємо виконання функції
  }

  // const fetchPost = function(postId)
  fetchPost(postId)
    .then((post) => {
      // Отримали пост, виводимо його дані у консоль
      displayPost(post);
    })
    .catch((error) => {
      console.error('Помилка:', error);
    });
});

// Отримання коментарів
document.getElementById('getCommentsButton').addEventListener('click', () => {
  const postId = document.getElementById('postIdInput').value;

  // Викликаємо функцію fetchComments(postId) для отримання коментарів та відображення їх
  // const fetchComments = function(postId)
  fetchComments(postId)
    .then((comments) => {
      displayComments(comments);
    })
    .catch((error) => {
      console.error('Помилка отримання коментарів:', error);
    });
});

// Функція для виконання запиту за постом з використанням fetch
function fetchPost(postId) {
  return fetch(`${apiUrl}/posts/${postId}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка запиту: ${response.status}`);
    }
    return response.json(); // Повертаємо результат у форматі JSON
  });
}

// Функція для виконання запиту за коментарями до поста з використанням fetch
function fetchComments(postId) {
  return fetch(`${apiUrl}/posts/${postId}/comments`).then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка запиту: ${response.status}`);
    }
    return response.json();
  });
}

// Функція для відображення даних про пост на сторінці
function displayPost(post) {
  // Встановлюємо стиль елементу з id="postContainer" на видимий
  document.getElementById('postContainer').style.display = 'block';
  // Вставляємо дані про пост в елемент з id="post"
  document.getElementById('post').innerHTML = `
  <p><strong>ID:</strong> ${post.id}</p>
  <p><strong>Title:</strong> ${post.title}</p>
  <p><strong>Body:</strong> ${post.body}</p>
`;
}

// Функція для відображення коментарів на сторінці
function displayComments(comments) {
  const commentsContainer = document.getElementById('comments');
  commentsContainer.innerHTML = '<h2>Коментарі:</h2>';
  // Додаємо коментарі до контейнера
  comments.forEach((comment) => {
    commentsContainer.innerHTML += `<div>
      <p><strong>ID:</strong> ${comment.id}</p>
      <p><strong>Name:</strong> ${comment.name}</p>
      <p><strong>Email:</strong> ${comment.email}</p>
      <p><strong>Body:</strong> ${comment.body}</p>
  </div>`;
  });
}
