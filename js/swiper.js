let swiperComments = new Swiper(".swiper-comments", {
  slidesPerView: 2.5,
  centeredSlides: true,
  spaceBetween: 16,
  slidePerGroup: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
    speed: 800,
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
      
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
      
    },

    576: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 5,
      slideToClickedSlide: true,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
      slideToClickedSlide: true,
    },
    1250: {
      slidesPerView: 2.5,
      spaceBetween: 16,
      slideToClickedSlide: true,
    },
  },
});

let swiperGallery = new Swiper(".swiper-gallery", {
  navigation: {
    nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
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
    speed: 400,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 5,
      slideToClickedSlide: true,
    },
    1250: {
      slidesPerView: 2,
      spaceBetween: 20,
      slideToClickedSlide: true,
    },
  },
});

