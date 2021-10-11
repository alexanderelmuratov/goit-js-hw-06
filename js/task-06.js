const inputRef = document.querySelector('#validation-input');
const datasetLength = parseInt(inputRef.dataset.length)

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.currentTarget.value.length === datasetLength
    ? event.currentTarget.classList.add('valid') &
      event.currentTarget.classList.remove('invalid')
    : event.currentTarget.classList.add('invalid') &
      event.currentTarget.classList.remove('valid');    
}
