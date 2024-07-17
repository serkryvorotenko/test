const swiper = new Swiper('.offers-swiper', {
    loop: true,
    slidesPerView:1.1,
    spaceBetween: 20,
breakpoints: {
        610: {
            slidesPerView:1,
        }
},
    navigation: {
        nextEl: '.offers-button-next',
        prevEl: '.offers-button-prev',
    },

});