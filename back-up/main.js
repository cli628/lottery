document.addEventListener('DOMContentLoaded', () => {
  var swiper1 = new Swiper(".main_visual .bottom_btn", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".main_visual .inner .top_sw", {
      spaceBetween: 10,
      loop:true,
      navigation: {
        nextEl: ".main_visual .swiper-button-next",
        prevEl: ".main_visual .swiper-button-prev",
      },
      thumbs: {
        swiper: swiper1,
      },
    });













});