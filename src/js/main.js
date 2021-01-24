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


// TNS

var slider1 = tns({
    container: '#my-slider-1',
    items: 1,
    nav: false, 
    slideBy: 'page',
    speed: 400,
    mouseDrag: true,
    controlsContainer: "#customize-controls-1",
    responsive: {
      320: {
        center: true,
        gutter: 20,
        items: 1
      },
      750: {
        center: false,
        items: 3,
      },
      980: {
        items: 4
      }
    }
});

var slider2 = tns({
    container: '#my-slider-2',
    items: 1,
    nav: false, 
    slideBy: 'page',
    speed: 400,
    mouseDrag: true,
    controlsContainer: "#customize-controls-2",
    responsive: {
      320: {
        center: true,
        gutter: 20,
        items: 1
      },
      750: {
        center: false,
        items: 3,
      },
      980: {
        items: 4
      }
    }
});

var slider3 = tns({
    container: '#my-slider-3',
    items: 1,
    nav: false, 
    slideBy: 'page',
    speed: 400,
    mouseDrag: true,
    controlsContainer: "#customize-controls-3",
    responsive: {
      320: {
        center: true,
        gutter: 20,
        items: 1
      },
      750: {
        center: false,
        items: 3,
      },
      980: {
        items: 4
      }
    }
});

var slider4 = tns({
    container: '#my-slider-4',
    items: 1,
    nav: false, 
    slideBy: 'page',
    speed: 400,
    mouseDrag: true,
    controlsContainer: "#customize-controls-4",
    responsive: {
      320: {
        center: true,
        gutter: 20,
        items: 1
      },
      750: {
        center: false,
        items: 3,
      },
      980: {
        items: 4
      }
    }
});