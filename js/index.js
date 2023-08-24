const textField = document.getElementById('textField');
const blueSquare = document.getElementById('sideDiv');
textField.addEventListener('focus', function () {
  blueSquare.style.display = 'block';
});
textField.addEventListener('blur', function () {
  blueSquare.style.display = 'none';
});
