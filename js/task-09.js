function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

changeColorButton.addEventListener('click', onChangeColorButtonClick);

function onChangeColorButtonClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = document.body.style.backgroundColor;
}
