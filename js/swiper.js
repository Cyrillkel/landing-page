let swiperComments = new Swiper('.swiper-comments', {
  slidesPerView: 2.5, 
  centeredSlides: true, 
  spaceBetween: 16, 
  slidePerGroup: 1, 
  loop: true, 
  autoplay: {
    delay: 3000, 
    stopOnLastSlide: true,
    disableOnInteraction: false, 
    speed: 800
  },
});

let swiperGallery = new Swiper('.swiper-gallery', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEL: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  autoHeight: true,
  simulateTouch: true,
  grabCursor: true,
  slidesPerView: 3, 
  centeredSlides: true, 
  spaceBetween: 5, 
  slidePerGroup: 0, 
  loop: true, 
  autoplay: {
    delay: 5000, 
    stopOnLastSlide: true,
    disableOnInteraction: false, 
    speed: 800
  },
});





