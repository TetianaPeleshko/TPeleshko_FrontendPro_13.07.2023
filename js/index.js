let length = parseInt(prompt('Enter the length of the array greater than 0:'));
let arr = [];

if (isNaN(length)) {
  alert('This is an invalid number. Try again.');
} else if (length <= 3) {
  alert('The length of the array must be greater than 3. Try again.');
} else {
  for (let i = 0; i < length; i++) {
    let element = prompt('Enter an array element:');
    arr.push(element);
  }
  alert(`Created array: ${arr}`);
  arr.sort();
  alert(`Sorted array:  ${arr}`);
  arr.splice(1, 3);
  alert(`Updated array:  ${arr}`);
}
