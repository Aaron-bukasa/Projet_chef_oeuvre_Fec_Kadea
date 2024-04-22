const bloquer = document.querySelector('.bloquer');
const debloquer = document.querySelector('.debloquer');
const supprimer = document.querySelector('.supprimer');

bloquer.addEventListener('click', actionUser('/server/lock/'));

async function actionUser(route) {
    const loading = document.querySelector('.loading');
    loading.style.display = 'block'

    const id = document.querySelector('.identifiant');
    const idValue = id.textContent;

    try {
        const response = await fetch(`${route}/${idValue}`, { method: 'POST' })

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
    
}