const page = document.querySelector('.page');
const layers = page.querySelectorAll('.intro__layer');

const SWITCH_OFF_BREAKPOINT= 820;

let isScrollListenerAdded = false;

const onScrollListener = function () {
  const scrollPosition = window.scrollY;
  layers.forEach((layer) => {
    let speed = layer.getAttribute('data-speed');
    let yPosition = -(scrollPosition * speed / 100);
    layer.setAttribute('style','transform: translate3d(0px, ' + yPosition + 'px, 0px)');
  });
};

function addScrollListener() {
  window.addEventListener('scroll', onScrollListener);
  isScrollListenerAdded = true;
}

function removeScrollListener() {
  window.removeEventListener('scroll', onScrollListener);
  layers.forEach((layer) => {
    layer.removeAttribute('style');
  });
  isScrollListenerAdded = false;
}

if (document.documentElement.clientWidth > SWITCH_OFF_BREAKPOINT) {
  addScrollListener();
}

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth > SWITCH_OFF_BREAKPOINT && !isScrollListenerAdded) {
    addScrollListener();
  } else if (document.documentElement.clientWidth <= SWITCH_OFF_BREAKPOINT && isScrollListenerAdded) {
    removeScrollListener();
  }
});
