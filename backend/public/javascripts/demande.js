action(
    document.querySelector('.valider'),
    'validée',
    'PUT',
    'la validation'
)

action(
    document.querySelector('.rejeter'),
    'rejétée',
    'PUT',
    'du rejet'
)

action(
    document.querySelector('.supprimer'),
    'supprimée',
    'DELETE',
    'la suppression'
)


function action(element, statut, method, errorStatut) {

    element.addEventListener('click', async() => {
        const id = document.querySelector('input.hidden')
    
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
            const response = await fetch('/demandes', requestOptions);
            if(response.status === 200) {
                alert(`Demande ${statut} avec succès`)
                if(method === 'DELETE') {
                    window.location.href = `/demandes`
                } else {
                    window.location.href = `/demandes/${id}`
                }
            }
        } catch (error) {
            alert(`Erreur lors de ${errorStatut} de la demande`)
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


const suiviDelete = document.querySelector('.suiviDelete');
const actionsTD = document.querySelectorAll('.actionsTD');

actionsTD.forEach((td) => {
    td.addEventListener('click', (event) => {
        
        if(event.target.value === 'Modifier') {
            const form = document.createElement('form');
            const title = document.createElement('h3');
            const textarea = document.createElement('textarea');
            const btns = document.createElement('div');
            const annuler = document.createElement('button');
            const valider = document.createElement('button');

            title.textContent = `Modification du suivi ${event.target.dataset.id}`
            textarea.setAttribute('rows', 5);
            annuler.setAttribute('type', 'button');
            annuler.setAttribute('value', 'Annuler');
            valider.setAttribute('type', 'button');
            valider.setAttribute('value', 'Valider');

            form.appendChild(title)
            form.appendChild(textarea)
            form.appendChild(btns)

            btns.appendChild(valider)
            btns.appendChild(annuler)

        } else if(event.target.value === 'Supprimer') {

        }
    })
})


suiviDelete.addEventListener('click', () => {
    console.log(suiviDelete.dataset.id);

})