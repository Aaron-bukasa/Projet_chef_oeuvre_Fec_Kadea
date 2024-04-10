const form = document.querySelector('.formAuth');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', handleAuth)

async function handleAuth(event) {
    
    try {
        event.preventDefault();

        const postData = {
            email: email.value,
            mot_de_passe: password.value
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };

        const response = await fetch('/users/login', requestOptions);

        if(response.status === 200) {
            const data = await response.json();
            if(data.r && data.r==='adm') {
                window.location.href = ''
            }
        } else {
            return console.error('Erreur de connexion');
        }

    } catch (error) {
      console.error(error);  
    }

    email.value = '';
    password.value = '';
}