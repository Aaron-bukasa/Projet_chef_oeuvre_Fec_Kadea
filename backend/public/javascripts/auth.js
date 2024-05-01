const adminLogin = () => {
    const form = document.querySelector('.formAuth');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const viewPassword = document.getElementById('viewPassword');

    form?.addEventListener('submit', handleAuth);
    viewPassword?.addEventListener('change', displayPassword)

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

            if (response.status === 200) {
                const descendRemonte = await response.json();
                localStorage.setItem('descendRemonte', descendRemonte)
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

    logout?.addEventListener('click', async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const response = await fetch('/users/server/logout', requestOptions);

            if (response.status === 200) {
                localStorage.removeItem('descendRemonte')
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

function displayPassword() {
    if (viewPassword.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}

function displaySuccess() {
    const div = document.createElement('div');
    const close = document.createElement('div');
    const bar1 = document.createElement('div');
    const bar2 = document.createElement('div');
    const success = document.createElement('p');

    success.textContent = textSucceffull;
    success.style.background = "#d1e7dd";
    success.style.width = '100%';
    success.style.height = '100%';

    bar1.style.transform = "translate(45deg)";
    bar2.style.transform = "translate(-45deg)";
    close.appendChild(bar1);
    close.appendChild(bar2);
    close.style.cursor = 'pointer';
    close.style.marginLeft = 'auto';
    close.style.marginRight = '0';

    div.appendChild(close);
}

function displayError() {
    const div = document.createElement('div');
    const close = document.createElement('div');
    const bar1 = document.createElement('div');
    const bar2 = document.createElement('div');
    const error = document.createElement('p');

    erreur.textContent = textError;
    erreur.style.background = '#f8d7da';
    erreur.style.width = '100%';
    erreur.style.height = '100%';

    bar1.style.transform = "translate(45deg)";
    bar2.style.transform = "translate(-45deg)";
    close.appendChild(bar1);
    close.appendChild(bar2);
    close.style.cursor = 'pointer';
    close.style.marginLeft = 'auto';
    close.style.marginRight = '0';

    div.appendChild(close);
}

function displayLoading(form, textError, textSucceffull, displayLoad, displayError, displaySuccess) {
    const div = document.createElement('div');
    const close = document.createElement('div');
    const bar1 = document.createElement('div');
    const bar2 = document.createElement('div');
    const loading = document.createElement('p');

    loading.textContent = 'Loading...';
    loading.style.background = '#cff4fc';
    loading.style.width = '100%';
    loading.style.height = '100%';
   
    bar1.style.transform = "translate(45deg)";
    bar2.style.transform = "translate(-45deg)";
    close.appendChild(bar1);
    close.appendChild(bar2);
    close.style.cursor = 'pointer';
    close.style.marginLeft = 'auto';
    close.style.marginRight = '0';

    div.appendChild(close);
    div.appendChild(loading);
    div.appendChild(erreur);
    div.appendChild(succeffull);
    div.style.position = 'absolute';
    div.style.width = '50%';
    div.style.height = '50%';
    div.style.padding = '15px';

    form.appendChild(div);
    form.style.position = 'relative';

    loading.style.display = displayLoad
    erreur.style.display = displayError
    success.style.display = displaySuccess

    div.addEventListener('click', () => {
        div.style.display = 'none'
    })
}