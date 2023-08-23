const navbar = document.querySelector('.navbar');

const openNav = document.querySelector('.icon-open');
const closeNav = document.querySelector('.icon-close');
const exhibitions = document.querySelectorAll('.exhibition');


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

exhibitions.forEach((exhibition) => {
    exhibition.addEventListener('mouseenter', (e) => {
        console.log(e);
        exhibition.classList.add('active');
    })
})
