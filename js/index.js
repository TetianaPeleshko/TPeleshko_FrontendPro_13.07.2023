'use strict';
// приклад з лекції 17
const server = http.createServer((req, res) => {
  switch (req.url && req.method == 'GET') {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      break;
    case '/users':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404: not found');
  }
});

server.listen(8199, (_) => {
  console.log(global);
});

// приклад коду на Node.js  ми створюємо сервер, який слухає порт 8200 і відповідає на шлях "/" текстом "Hello, world!". Якщо шлях в запиті відрізняється від "/", сервер повертає 404: not found.
('use strict');

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404: not found');
  }
});

const port = 8200; // Змініть порт на бажаний

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// У цьому коді ми використовуємо switch/case для обробки шляху запиту. Якщо шлях дорівнює "/", то сервер повертає "Hello, world!". В протилежному випадку, якщо шлях не визначений, сервер повертає 404: not found
('use strict');

const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, world!');
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404: not found');
  }
});

const port = 8200; // Змініть порт на бажаний

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// У рядку адреси браузера введіть http://localhost:8200 (або відповідну адресу з вашим портом)
