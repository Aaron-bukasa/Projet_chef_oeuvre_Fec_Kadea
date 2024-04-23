const bloquer = document.querySelector('.bloquer');
const debloquer = document.querySelector('.debloquer');
const supprimer = document.querySelector('.supprimer');

bloquer.addEventListener('click', async() => {
    const loading = document.querySelector('.loading');
    loading.style.display = 'block'

    const id = document.querySelector('.identifiant');
    const idValue = id.textContent;

    const postData = {
        id: idValue
    };
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    };

    try {
        const response = await fetch('users/server/lock', requestOptions);

        console.log(response);
        loading.style.display = 'none'

        if(response.status === 200) {
            return alert(response.data);
        } else {
            alert(response.data)
        }

    } catch (error) {
        loading.style.display = 'none'
        return alert(response.data)
    }
});