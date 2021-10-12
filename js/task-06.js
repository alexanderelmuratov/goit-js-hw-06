const inputRef = document.querySelector('#validation-input');
const datasetLength = parseInt(inputRef.dataset.length)

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.currentTarget.classList.add('invalid');

    if (event.currentTarget.value.length === datasetLength) {
        return event.currentTarget.classList.replace('invalid', 'valid');
    }
    return event.currentTarget.classList.replace('valid', 'invalid');      
}
