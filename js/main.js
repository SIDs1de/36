document.addEventListener('DOMContentLoaded', () => {
  $.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
  $('.footer__input--masked, .how__input--masked, .modal__input--masked').mask('+7 (h99) 999-99-99', {
    autoclear: false
  })

  const sliderActivate = () => {
    const pageSlider = new Swiper('.slider__swiper', {
      wrapperClass: 'slider__swiper-wrapper',
      slideClass: 'slider__swiper-slide',
      slidesPerView: 1.3,
      grabCursor: true,
      spaceBetween: 17,
      centeredSlides: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      watchOverflow: true,
      speed: 800,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
        el: '.slider__swiper-pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'slider__swiper-bullet',
        bulletActiveClass: 'slider__swiper-bullet--active',
      },
      breakpoints: {
        600: {
          slidesPerView: 1.9,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 3,
          centeredSlides: false,

        }
      }
    });
  }

  const openModals = () => {
    const btns = document.querySelectorAll('a[data-open-modal]');
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        html.classList.add('_modal-open')
        body.classList.add('_modal-open')
      })
    })

    const closeBtns = document.querySelectorAll('.modal__card-cross, .modal__content, .modal__card-success-btn');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.classList[0] == 'modal__card-cross' || e.target.classList[0] == 'modal__content' || e.target.classList[0] == 'modal__card-cross-img' || e.target.classList[0] == 'modal__card-success-btn') {
          html.classList.remove('_modal-open')
          body.classList.remove('_modal-open')
          const inners = document.querySelectorAll('.modal__card-inner');
          setTimeout(() => {
            inners.forEach(inner => {
              if (!inner.classList.contains('modal__card-inner--success') && !inner.classList.contains('modal__card-inner--unsuccess')) {
                inner.classList.remove('_removed')
              } else {
                inner.classList.remove('_showed')
              }
            })
          }, 400)

        }
      })
    })

  }

  sliderActivate();
  openModals();
})
