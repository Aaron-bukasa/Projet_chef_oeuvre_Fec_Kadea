const adminLogin = () => {
    const form = document.querySelector('.formAuth');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form?.addEventListener('submit', handleAuth)

    async function handleAuth(event) {
        
        try {
            event.preventDefault();

            const postData = {
                email: email.value.trim(),
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
           
            if(response.status === 200) {
            
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
}
adminLogin();

const adminLogout = () => {
    const logout = document.querySelector('.logout');

    logout?.addEventListener('click', async() => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const response = await fetch('/users/server/logout', requestOptions);
           
            if(response.status === 200) {
                window.location.href = '/';
            } else {
                return console.error('Erreur erreur s\'est produite lors du processus de ls deconnexion');
            }

        } catch (error) {
            console.error(error);
        }
    })
}
adminLogout()