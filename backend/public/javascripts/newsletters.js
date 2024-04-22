const createNewsletter = document.querySelector('.create_newsletter');
const objet = document.querySelector('.objet');
const newsletter = document.querySelector('.content');


createNewsletter.addEventListener('submit', async(event) => {
    event.preventDefault();

    try {
        const postData = {
            objet: objet.value,
            newsletter: newsletter.value
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        };

        const response = await fetch('/newsletters/send', requestOptions);
       
        if(response.status === 200) {
        
            window.location.href = '/newsletters';
        } else {
            return console.error('Erreur de connexion');
        }
    } catch (error) {
        console.error(error);
    }
})

