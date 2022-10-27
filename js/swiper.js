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
  breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slideToClickedSlide: true,
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 1,
        spaceBetween: 0,
        slideToClickedSlide: true,
    },
    // when window width is >= 640px
    640: {
        slidesPerView: 2,
        spaceBetween: 0,
        slideToClickedSlide: true,
    },
    960: {
      slidesPerView: 3,
        spaceBetween: 16,
        slideToClickedSlide: true,
    }
}
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
    speed: 400
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slideToClickedSlide: true,
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 1,
        spaceBetween: 0,
        slideToClickedSlide: true,
    },
    // when window width is >= 640px
    640: {
        slidesPerView: 1,
        spaceBetween: 0,
        slideToClickedSlide: true,
    },
    960: {
      slidesPerView: 3,
        spaceBetween: 5,
        slideToClickedSlide: true,
    }
}
});





