const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const messageError = document.getElementById('error');

form.addEventListener('submit', (Event) => {
    let messages = [];
    let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%&^&*()--+={}\[\]\\:;"'<>,.?/_]).{10,16}$/;

    if(email.value === '' || email.value === null){
        messages.push('O campo e-mail é obrigatório');
    }

    if(password.value.length <= 8){
        messages.push('A senha tem que ter mais de 8 caracteres');
    }

    if(!regex.test(password.value)){
        messages.push('Precisa ter uma letra maiúscula e minúcula,caractere especial e número');
    }

    if(messages.length > 0){
        Event.preventDefault();
        messageError.innerHTML = messages.join(', ')
    }
})