var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.news__banner-slider-next',
      prevEl: '.news__banner-slider-prev',
    },
});

console.log("oops!");