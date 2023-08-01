// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let result = '';

  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randIndex);
  }
  return result;
}

const key = generateKey(16, characters);
console.log(key);
