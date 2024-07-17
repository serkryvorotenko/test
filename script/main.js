const burgerBtn = document.querySelector('.header-burger');
const nav = document.querySelector('.header-nav');
const headerMenu = document.querySelector('.header-menu');

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    headerMenu.classList.toggle('active')
    document.body.classList.toggle('scroll-block');
})


