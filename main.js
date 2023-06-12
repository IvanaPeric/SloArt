const navbar = document.querySelector('.navbar');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
})

