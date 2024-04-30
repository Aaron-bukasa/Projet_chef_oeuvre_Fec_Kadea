let nameAvatar = document.querySelector('.name');
nameAvatar.textContent = localStorage.getItem('descendRemonte').match(/(?<=PSSR)[a-zA-Z]+/)[0].split('').reverse().join('').toLowerCase();

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

    menuButtonServer?.addEventListener('click', handleClick);
}
handleNavbarServer()



const SuiviDmd = () => {
    const formSuiviDmd = document.querySelector('.createSuiviDmd');
    const id = document.querySelector('.createSuiviDmd p');
    const commentaire = document.querySelector('#commentaire');
    const validation = document.querySelector('#validation');
    
    formSuiviDmd?.addEventListener('submit', (e) => {
    
        e.preventDefault();
        const demandeId = Number(id.textContent);

        if(validation) {
            const valid = suivi(validation);
            const divValid = document.querySelector('.valid');
            const selectBtn = document.querySelector('.selectBtn');
            divValid.setAttribute("disabled", "");
            selectBtn.setAttribute("disabled", "");
            return valid;
        } else {
            const comment = suivi(commentaire);
            commentaire.value = '';
            return  comment;
        }

        async function suivi(evenement) {
            try {
                if(evenement.value === "") {
                    return console.error("veiullez choisir une option");
                }
                const postData = {
                    demandeId: demandeId,
                    evenement: evenement.value === "valider" ? "Votre demande a été validée; vous pouvez suivre son évolution sur notre plateforme" : evenement.value === "rejeter" ? "Votre demande a été rejetée; vous pouvez nous contacter pour plus informations" : evenement.value,
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

                if(evenement.value === "rejeter") {
                    demandeStatut('rejetée')
                } else if(evenement.value === "valider") {
                    demandeStatut('validéé')
                }

                function demandeStatut(statut) {
                    try {
                        const postData = {
                            statut: statut
                        };
                      
                        const requestOptions = {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(postData)
                        };
            
                        const response = fetch(`/demandes/${demandeId}`, requestOptions);
            
                        if(!response.ok) {
                            throw new Error('Erreur lors de la requête : ' + response.statusText);
                        }  
                    } catch (error) {
                        console.error(error);
                    }
                }
                return response.json();
            } catch (error) {
                console.error(error)
            }
        }
    })

}
SuiviDmd()


const suiviUtilisateur = () => {
    const formSuivi = document.querySelector('.suiviUtilisateur');
    const id = document.querySelector('.suiviUtilisateur p');
    const commentaire = document.querySelector('#commentaire');
    
    formSuivi?.addEventListener('submit', async(e) => {
        e.preventDefault();
        const utilisateurId = Number(id.textContent);

            try {
                if(commentaire.value === "") {
                    return console.error("votre message ne contient aucun contenu");
                }
                const postData = {
                    utilisateurId: utilisateurId,
                    notifications: commentaire.value,
                };
            
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                };
    
                const response =  await fetch('/suivi_utilisateur', requestOptions);
    
                if(!response.ok) {
                    return console.error('Erreur lors de la requête : ' + response.statusText);
                }

                return response.json();

            } catch (error) {
                console.error(error)
            }
    })
}

suiviUtilisateur();


function userLock() {
    
}



