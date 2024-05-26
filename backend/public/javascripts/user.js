const supprimer = document.querySelector('.supprimer');
const modifier = document.querySelector('.modifier');

const url = window.location.href;
const requestId = url.match(/(?<=.+\/server\/).+/)[0];

modifier.addEventListener('click', () => {
    window.localStorage.setItem('userId', requestId);
    window.location.href = "/users/server/create";
})

supprimer.addEventListener('click', () => {
    confirmation()
})

async function actionValider() {

    const requestOptions = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(`/users/server/${requestId}`, requestOptions);

        if(response.status === 200) {
            const message = await response.json();
            window.localStorage.setItem("userDelete", message.message);
            return window.location.href = '/users/server';
        }
    } catch (error) {
        return alert(error)
    }
}

function actionAnnuler() {
    document.querySelector('.confirmation').remove()
    document.querySelector('.backdrop').remove()
}


function confirmation() {
    const container = document.createElement('div');
    const p = document.createElement('p');
    const div = document.createElement('div');
    const annuler = document.createElement('button');
    const valider = document.createElement('button')
    const backdrop = document.createElement('div')
  

    p.textContent = "Voulez-vous vraiment supprimer cet utilisateur ?"
    annuler.textContent = "Annuler";
    valider.textContent = "valider";

    p.style.marginBottom = '6px';

    annuler.style.padding = '3px'
    annuler.classList.add('annuler')
    valider.style.padding = '4px'
    valider.classList.add('valider')

    div.style.display = 'flex';
    div.style.justifyContent = 'space-between'
    div.style.marginTop = '6px'

    container.style.padding = '16px'
    container.style.borderRadius = '12px'
    container.style.backgroundColor = 'red'
    container.style.color = "white"
    container.style.fontWeight = "500"
    container.style.fontSize = "18px"
    container.classList.add('confirmation')

    div.appendChild(annuler);
    div.appendChild(valider);

    container.appendChild(p);
    container.appendChild(div)

    container.style.position = "absolute";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = 'translate(-25%, -50%)'
    container.style.zIndex = '999'

    backdrop.style.backgroundColor = '#5757577a';
    backdrop.style.position = 'absolute';
    backdrop.style.left = 0;
    backdrop.style.top = 0;
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.zIndex = '995';
    backdrop.classList.add('backdrop');

    document.body.append(backdrop);
    document.body.append(container);

    annuler && annuler.addEventListener('click', actionAnnuler)
    valider && valider.addEventListener('click', actionValider)

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