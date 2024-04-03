/* BAR DE NAVIGATION */
const handleNavbarServer = () => {
    const menuButtonServer = document.querySelector('.menu-button');
    const menuButtonOpen = document.querySelector('.menu-button img:nth-child(2)');
    const menuButtonClose = document.querySelector('.menu-button img:nth-child(1)');
    const navbarHorizontaleSpan = document.querySelectorAll('.navbar__left a span');

    const handleClick = () => {
        menuButtonServer.classList.toggle('menu__server-active');

        if(menuButtonServer.className.includes('menu__server-active')) {
            navbarHorizontaleSpan.forEach(span => span.style.display = "inline-block")
            menuButtonOpen.style.display = "block";
            menuButtonClose.style.display = "none";
        } else {
            navbarHorizontaleSpan.forEach(span => span.style.display = "none")
            menuButtonOpen.style.display = "none";
            menuButtonClose.style.display = "block";
        }
    }

    menuButtonServer.addEventListener('click', handleClick);
}
handleNavbarServer()

/* CREER UN COMPTE */
const createUser = () => {

    const signup = document.querySelector('.signup');
    const nom = document.querySelector('.signup #nom');
    const prenom = document.querySelector('.signup #prenom');
    const email = document.querySelector('.signup #email');
    const telephone = document.querySelector('.signup #telephone');
    const role = document.querySelector('.signup #role');

    signup?.addEventListener('submit', signupUser)

    async function signupUser(e) {
        try {
            e.preventDefault();

            const postData = {
                nom: prenom.value + ' '+ nom.value,
                email: email.value,
                telephone: telephone.value,
                role: role.value,
                mot_de_passe: 'admin'
            };
          
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            };

            const response = fetch('/users/signup', requestOptions);

            if(!response.ok) {
                throw new Error('Erreur lors de la requête : ' + response.statusText);
            }
            window.location.href = "/users";

        } catch (error) {
          console.error(error);  
        }

        nom.value = '';
        prenom.value = '';
        email.value = '';
        telephone.value = '';
        role.value = '';

    }
}
createUser();

const putUser = () => {

    const putUser = document.querySelector('.putUser');
    const selectUser = document.querySelector('.putUser #utilisateur');
    const nom = document.querySelector('.putUser #nom');
    const prenom = document.querySelector('.putUser #prenom');
    const email = document.querySelector('.putUser #email');
    const telephone = document.querySelector('.putUser #telephone');
    const role = document.querySelector('.putUser #role');

    let user;
    let id;

    selectUser?.addEventListener('change', (event) => {
        user = event.target.value;

        const newUser = user.split(',')
        
        id = newUser[0].match(/(?<=:).+/)[0];
        nom.value = newUser[1].match(/(?<=:").+(?= )/);
        prenom.value = newUser[1].match(/(?<=:.+ ).+(?=")/);
        email.value = newUser[2].match(/(?<=:").+(?=")/);
        telephone.value = newUser[3].match(/(?<=:").+(?=")/);
        role.value = newUser[5].match(/(?<=:").+(?=")/);
    })

    putUser?.addEventListener('submit', async(e) => {
        try {
            e.preventDefault();

            const postData = {
                id: Number(id),
                nom: prenom.value + ' '+ nom.value,
                email: email.value,
                telephone: telephone.value,
                role: role.value,
                mot_de_passe: 'admin'
            };
          
            const requestOptions = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            };

            const response = fetch(`/users/${id}`, requestOptions);

            if(!response.ok) {
                throw new Error('Erreur lors de la requête : ' + response.statusText);
            }
            return response.json();

        } catch (error) {
            console.error(error);
        }
        selectUser.value = "";
        nom.value = '';
        prenom.value = '';
        email.value = '';
        telephone.value = '';
        role.value = '';

    })
}

putUser()


const SuiviDmd = () => {
    const formSuiviDmd = document.querySelector('.createSuiviDmd');
    const id = document.querySelector('.createSuiviDmd p');
    const commentaire = document.querySelector('#commentaire');
    
    formSuiviDmd?.addEventListener('submit', async(e) => {
        try {
            e.preventDefault();

            const postData = {
                demandeId: Number(id.textContent),
                evenement: commentaire.value
            };
        
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            };

            const response =  await fetch('/suivi_demande', requestOptions);

            if(!response.ok) {
                throw new Error('Erreur lors de la requête : ' + response.statusText);
            }
            return response.json();

        } catch (error) {
        console.error(error);
        }
    })

    commentaire.value = '';
}
SuiviDmd()
