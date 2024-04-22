/* CREER UN COMPTE */
const createUser = () => {

    const signup = document.querySelector('.signup');
    const nom = document.querySelector('.signup #nomSignup');
    const prenom = document.querySelector('.signup #prenomSignup');
    const email = document.querySelector('.signup #emailSignup');
    const password = document.querySelector('.signup #passwordSignup');
    const telephone = document.querySelector('.signup #telephoneSignup');
    const role = document.querySelector('.signup #roleSignup');

    signup?.addEventListener('submit', signupUser)

    async function signupUser(e) {
        try {
            e.preventDefault();

            const postData = {
                nom: prenom.value + ' '+ nom.value,
                email: email.value,
                telephone: telephone.value,
                role: role.value,
                password: password.value
            };
          
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            };

            const response = await fetch('/users/server/signup', requestOptions);
            if(response.status === 201) {
                return alert('Utilisateur crée avec succès !');
            }

            return alert('Erreur inconnue lors de la création de l\'utilisateur');

        } catch (error) {
            console.error(error);
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');  
        } finally {
            nom.value = '';
            prenom.value = '';
            email.value = '';
            telephone.value = '';
            role.value = '';
    
            window.location.href = '/users/server'
        }
    }
}
createUser();

const putUser = () => {

    const putUser = document.querySelector('.putUser');
    const selectUser = document.querySelector('#user');
    const nom = document.querySelector('#putNom');
    const prenom = document.querySelector('#putPrenom');
    const email = document.querySelector('#putEmail');
    const telephone = document.querySelector('#putTelephone');
    const password = document.querySelector('#putPassword');
    const role = document.querySelector('#putRole');

    let user;
    let id;

    selectUser?.addEventListener('change', (event) => {
        user = event.target.value;
        const newUser = user.split(',')
        id = newUser[0].match(/[0-9]/)[0];
        prenom.value = newUser[1].match(/(?<=:").+(?= )/);
        nom.value = newUser[1].match(/(?<=:.+ ).+(?=")/);
        email.value = newUser[2].match(/(?<=:").+(?=")/);
        telephone.value = newUser[8].match(/(?<=:").+(?=")/);
        password.value = newUser[3].match(/(?<=:").+(?=")/);
        role.value = newUser[4].match(/(?<=:").+(?=")/);
    })

    putUser.addEventListener('submit', async (e) => {
        try {
          e.preventDefault();
      
          const postData = {
            id: Number(id),
            nom: prenom.value + ' ' + nom.value,
            email: email.value,
            telephone: telephone.value,
            role: role.value,
            password: password.value
          };
      
          const requestOptions = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
          };
      
          const response = await fetch(`/users/server/${id}`, requestOptions);
      
          if (response.status === 200) {
           return alert('Profil modifié avec succès !');
          } else {
            return alert('Erreur inconnue lors de la modification du profil');
          }      
        } catch (error) {
          console.error(error);
          alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        } finally {
          selectUser.value = "";
          nom.value = '';
          prenom.value = '';
          email.value = '';
          password.value = '';
          telephone.value = '';
          role.value = '';
          
          window.location.href = '/users/server';
        }
      });
}
putUser()
