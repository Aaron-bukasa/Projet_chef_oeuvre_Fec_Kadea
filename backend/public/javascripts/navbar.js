/// Variables generales
const menuButtonClient = document.querySelector('.navbar__top .menu');
const menuButtonServer = document.querySelector('.menu-button');

/* navbar client */
function handleNavbarClient() {
    const menuButtonOpen = document.querySelector('.menu-open');
    const menuButtonClose = document.querySelector('.menu-close');
    const navbarClientNavigationConnexion = document.querySelector('.logo + div');
    const navbarClientNavigationConnexionUl = document.querySelector('.logo + div ul');
    const navbarClientTop = document.querySelector('.navbar__top-top');

    const handleClick = () => {
        menuButtonClient.classList.toggle('menu__client-active');

        if(menuButtonClient.className.includes('menu__client-active')) {
            navbarClientTop.style.position = 'relative';
            navbarClientTop.style.height = '100vh';
            navbarClientTop.style.alignItems = 'start';
            navbarClientNavigationConnexion.style.display = 'block';
            navbarClientNavigationConnexion.style.position = 'absolute';
            navbarClientNavigationConnexion.style.top = '25%';
            navbarClientNavigationConnexion.style.left = '25%';
            navbarClientNavigationConnexionUl.style.marginBottom = "50px"
            menuButtonOpen.style.display = "none";
            menuButtonClose.style.display = "block";
        } else {
            navbarClientTop.style.height = 'auto';
            navbarClientNavigationConnexion.style.display = "none"
            menuButtonOpen.style.display = "block";
            menuButtonClose.style.display = "none";
        }
    }

    menuButtonClient.addEventListener('click', handleClick);
}
handleNavbarClient();

/* navbar server */
function handleNavbarServer() {
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

    menuButtonServer.addEventListener('click', handleClick);
}
handleNavbarServer()