function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const createButtonRef = document.querySelector('button[data-create]');
const destroyButtonRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const newBox = document.createElement('div');
    newBox.style.marginTop = '5px';  
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.border = '1px solid #000000';
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    boxesRef.appendChild(newBox);
  };  
}

createButtonRef.addEventListener('click', onCreateButtonClick);
function onCreateButtonClick() {
  createBoxes(inputRef.value);  
}

destroyButtonRef.addEventListener('click', onDestroyButtonClick);
function onDestroyButtonClick() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
}
