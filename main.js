const navbar = document.querySelector('.navbar');

const openNav = document.querySelector('.icon-open');
const closeNav = document.querySelector('.icon-close');

openNav.addEventListener('click', (e) => {
    e.preventDefault()
    openNav.classList.add('hidden');
    closeNav.classList.remove('hidden');
    navbar.classList.toggle('hidden');
})

closeNav.addEventListener('click', (e) => {
    e.preventDefault()
    openNav.classList.remove('hidden');
    closeNav.classList.add('hidden');
    navbar.classList.toggle('hidden');
})

