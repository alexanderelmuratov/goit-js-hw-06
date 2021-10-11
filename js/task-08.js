const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password,
    };
    
    if (email === '' || password === '') {
        return alert('Необходимо заполнить все поля!');
    };
    
    console.log(formData);
    event.currentTarget.reset();
}
