const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Default parameters
  slidesPerView: 1,
  slidesPerGroup: 1, // Number of slides to scroll by

  breakpoints: {
    // when window width is >= 820px
    821: {
      slidesPerView: 2,
      slidesPerGroup: 2, // Number of slides to scroll by
    },
  }
});
