const swiper = new Swiper('.js-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: '.js-pagination',
    type: 'fraction',
  },
  
  navigation: {
    nextEl: '.js-button-next',
    prevEl: '.js-button-prev',
  },
});