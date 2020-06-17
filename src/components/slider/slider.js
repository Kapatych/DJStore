import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const mainSlider = $('.main-slider');
const helpSlider = $('.help-slider');

mainSlider.owlCarousel({
  nav: false,
  loop: true,
  dots: false,
  items: 1,
  mouseDrag: false,
  touchDrag: false,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
});

helpSlider.owlCarousel({
  nav: true,
  loop: true,
  dots: false,
  items: 1,
  margin: 37,
  autoWidth:true,
  navContainerClass: 'slider-nav',
  navClass: ['slider-prev', 'slider-next'],
}).on('dragged.owl.carousel', function (e) {
  if (e.relatedTarget._drag.direction == 'left') {
    mainSlider.trigger('next.owl.carousel')
  } else {
    mainSlider.trigger('prev.owl.carousel')
  }
});

helpSlider.on('click', '.slider-next', function () {
  mainSlider.trigger('next.owl.carousel')
});

helpSlider.on('click', '.slider-prev', function () {
  mainSlider.trigger('prev.owl.carousel')
});
