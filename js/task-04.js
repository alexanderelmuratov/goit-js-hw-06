let counterValue = 0;
const step = 1;

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value')
const incrementButtonRef = document.querySelector('[data-action="increment"]');

decrementButtonRef.addEventListener('click', onDecrementButtonClick);
incrementButtonRef.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    counterValue -= step;
    valueRef.textContent = counterValue;
    console.log(counterValue);
}

function onIncrementButtonClick() {
    counterValue += step;
    valueRef.textContent = counterValue;
    console.log(counterValue);
}
