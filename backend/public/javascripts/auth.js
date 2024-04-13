const form = document.querySelector('.formAuth');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', handleAuth)

async function handleAuth(event) {
    
    try {
        event.preventDefault();

        const postData = {
            email: email.value,
            password: password.value
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };

        const response = await fetch('/users/server/login', requestOptions);
        console.log(response);
        if(response.status === 200) {
          console.log('salut mec');
            window.location.href = '/dashboard';
        } else {
            return console.error('Erreur de connexion');
        }

    } catch (error) {
      console.error(error);  
    }

    email.value = '';
    password.value = '';
}