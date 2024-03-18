const navbar = document.querySelector('.navbar');

const openNav = document.querySelector('.icon-open');
const closeNav = document.querySelector('.icon-close');
const exhibitions = document.querySelectorAll('.exhibition');
const signs = document.querySelectorAll('.sign-exhibition');

localStorage.theme = 'light';

openNav.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.remove('hidden');
    openNav.classList.add('hidden');
    closeNav.classList.remove('hidden');
})

closeNav.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.add('hidden');
    openNav.classList.remove('hidden');
    closeNav.classList.add('hidden');
})

exhibitions.forEach((exhibition, index) => {
    exhibition.addEventListener('click', (e) => {
        exhibition.classList.toggle('active');
        const active = exhibition.classList.contains('active');
        signs[index].src = active ? "../public/icons/tina-minus.svg" : "../public/icons/tina-plus.svg"
    })
})

// For Live Projects
window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});

document.addEventListener('scroll', (e) => {
    const nav = document.querySelector('nav');
    console.log(nav)
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
})