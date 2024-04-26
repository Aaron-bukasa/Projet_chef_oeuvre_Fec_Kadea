action(
    document.querySelector('.valider'),
    document.querySelector('.supprimer').dataset.id,
    'validée',
    'PUT',
    '/demandes',
    'Demande validée avec succès',
    'Erreur lors de la validation de la demande'
)

action(
    document.querySelector('.rejeter'),
    document.querySelector('.supprimer').dataset.id,
    'rejétée',
    'PUT',
    '/demandes',
    'Demande rejetée avec succès',
    'Erreur lors du rejet de la demande'
)

action(
    document.querySelector('.supprimer'),
    document.querySelector('.supprimer').dataset.id,
    'supprimée',
    'DELETE',
    '/demandes',
    'Demande supprimée avec succès',
    'Erreur lors de la suppression de la demande'
)


function action(element, id, statut, method, route, succefullMessage, errorMessage) {

    element.addEventListener('click', async() => {
    
        const postData = {
            id: id.value,
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
            console.log(response);
            if(response.status === 200) {
                alert(succefullMessage)
                if(method === 'DELETE') {
                    window.location.href = `/demandes`
                } else {
                    window.location.href = `/demandes/${id}`
                }
            }
        } catch (error) {
            alert(errorMessage)
        }
    
    })
}




suiviActions(
    document.querySelector('.createSuivi'),
    'POST',
    'Suivi de demande créé avec succès',
    'Erreur lors de l\'ajout du nouveau suivi'
)


function suiviActions(element, method, succefullMessage, errorMessage) {

    const comment = document.querySelector('textarea.suivi');
    const id = document.querySelector('input.hidden')

    element.addEventListener('click', async(event) => {
        event.preventDefault();
    
        const postData = {
            demandeId: id.value,
            evenement: comment.value
        };
    
        const requestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };
    
        try {
            const response = await fetch('/suivi_demande', requestOptions);
            if(response.status === 201) {
                return alert(succefullMessage)
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
            annuler.setAttribute('type', 'button');
            annuler.setAttribute('value', 'Annuler');
            valider.setAttribute('type', 'submit');
            valider.setAttribute('value', 'Valider');

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


// suiviDelete.addEventListener('click', () => {
//     console.log(suiviDelete.dataset.id);

// })