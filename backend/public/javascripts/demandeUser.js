const form = document.querySelector('.userSignup');
const password = document.querySelector('userPassord');

form.addEventListener('submit', (event) => {
    event.preventDefault()

    
    console.log(password.value);
})