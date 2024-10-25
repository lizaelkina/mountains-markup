const page = document.querySelector('.page');
const slider = page.querySelector('.slider');
const sliderTabs = slider.querySelectorAll('.slider__tab');

sliderTabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    sliderTabs.forEach((t) => {
      t.classList.remove('slider__tab_active');
    });
    event.currentTarget.classList.add('slider__tab_active');
  });
});
