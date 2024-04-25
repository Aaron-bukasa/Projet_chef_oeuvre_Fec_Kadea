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