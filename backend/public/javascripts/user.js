

// bloquer.addEventListener('click', async() => {
//     const loading = document.querySelector('.loading');
//     loading.style.display = 'block'

//     const id = document.querySelector('.identifiant');
//     const idValue = id.textContent;

//     const postData = {
//         id: idValue
//     };
//     const requestOptions = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//     };

//     try {
//         const response = await fetch('users/server/lock', requestOptions);

//         console.log(response);
//         loading.style.display = 'none'

//         if(response.status === 200) {
//             return alert(response.data);
//         } else {
//             alert(response.data)
//         }

//     } catch (error) {
//         loading.style.display = 'none'
//         return alert(response.data)
//     }
// });

// action(
//     document.querySelector('.valider'),
//     'validée',
//     'PUT',
//     '/demandes',
//     'Demande validée avec succès',
//     'Erreur lors de la validation de la demande'
// )

// action(
//     document.querySelector('.rejeter'),
//     'rejetée',
//     'PUT',
//     '/demandes',
//     'Demande rejetée avec succès',
//     'Erreur lors du rejet de la demande'
// )

// action(
//     document.querySelector('.supprimer'),
//     'supprimée',
//     undefined,
//     '/users/server',
//     'Demande supprimée avec succès',
//     'Erreur lors de la suppression de la demande'
// )

action(
    document.querySelector('.supprimerUser'), 
    undefined, 
    'DELETE', 
    '/users/server'
)

// suiviActions(
//     document.querySelector('.btnSuiviCreate'),
//     document.querySelector('.suiviCreate'),
//     'POST',
//     '/suivi_demande',
//     'Suivi de demande créé avec succès',
//     'Erreur lors de l\'ajout du nouveau suivi'
// )


function action(element, statut, method, route) {

    element.addEventListener('click', async() => {
        
        const postData = {
            requestId: element.dataset.id,
            statut: statut && statut
        };
        const requestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };
    
        try {
            const response = await fetch(route, requestOptions);
            if(response.status === 200) {
               
                if(statut !== 'bloqué' && statut !== 'debloqué') {
                    const message = await response.data;
                    alert(message)
                    window.location.href = `/users/server/${element.dataset.id}`;
                } else  {
                    const message = await response.data;
                    alert(message)
                    window.location.href = '/users/server'
                    // emailSignupMember(element, succefullMessage, errorMessage);
                }
            }
        } catch (error) {
            return alert('erreur server')
        }
    
    })
}


function suiviActions(submit, textarea, method, route, succefullMessage, errorMessage) {

    submit.addEventListener('click', async(event) => {
        event.preventDefault();
    
        const postData = {
            id: submit.dataset.id,
            evenement: textarea.value
        };
    
        const requestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };
    
        try {
            const response = await fetch(route, requestOptions);
            if(response.status === 201) {
                alert(succefullMessage);
                return window.location.href = `/demandes/${submit.dataset.id}`;
            }
        } catch (error) {
            alert(errorMessage)
        }
    })
}


// const suiviDelete = document.querySelector('.suiviDelete');
const actionsTD = document.querySelectorAll('.actionsTD');

actionsTD.forEach((td) => {
    td.addEventListener('click', (event) => {
        
        if(event.target.value === 'Modifier') {
            const form = document.createElement('form');
            const title = document.createElement('h3');
            const textarea = document.createElement('textarea');
            const btns = document.createElement('div');
            const annuler = document.createElement('input');
            const valider = document.createElement('input');

            title.textContent = `Modification du suivi ${event.target.dataset.id}`
            textarea.setAttribute('rows', 5);
            textarea.setAttribute('class', "suiviUpdate");
            annuler.setAttribute('type', 'button');
            annuler.setAttribute('value', 'Annuler');
            annuler.setAttribute('class', 'btnAnnulerUpdate');
            valider.setAttribute('type', 'submit');
            valider.setAttribute('value', 'Valider');
            valider.setAttribute('class', 'btnSuiviUpdate');
            valider.setAttribute('data-id', event.target.dataset.id);

            form.appendChild(title)
            form.appendChild(textarea)
            form.appendChild(btns)

            btns.appendChild(valider)
            btns.appendChild(annuler)

            // STYLES
            form.style.backgroundColor = '#c4c4c4';
            form.style.width = '50%';
            form.style.position = 'absolute';
            form.style.top = '50%';
            form.style.left = '50%';
            form.style.transform = 'translate';
            form.style.translate = '-50%';
            form.style.padding = '12px';

            textarea.style.border = '2px solid'
            textarea.style.backgroundColor = '#D4D4D4'
            textarea.style.width = '100%'
            textarea.style.padding = '4px'

            btns.style.marginInline = '0px auto';

            annuler.style.backgroundColor = 'red';
            valider.style.backgroundColor = 'blue'

            td.appendChild(form)

            suiviActions(
                document.querySelector('.btnSuiviUpdate'),
                document.querySelector('.suiviUpdate'),
                'PUT',
                '/suivi_demande',
                'Suivi de demande modifié avec succès',
                'Erreur lors de la modification du nouveau suivi'
            )

        } else if(event.target.value === 'Supprimer') {
            action(
                document.querySelector('.suiviDelete'),
                undefined,
                'DELETE',
                '/suivi_demande',
                `Suivi ${event.target.dataset.id} supprimée avec succès`,
                `Erreur lors de la suppression de suivi ${event.target.dataset.id}`
            )
        }
    })
})

async function emailSignupMember(element, succefullMessage, errorMessage) {
    const dataMember = {
        nom: element.dataset.name,
        email: element.dataset.email
    };
    
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataMember)
    };

    try {
        const response = await fetch('/demandes/signup', requestOptions);
        if (response.status === 201) {
            return alert(succefullMessage)
        } 
    } catch (error) {
        return alert(errorMessage)
    }
}