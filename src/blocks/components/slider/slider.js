const page = document.querySelector('.page');
const slider = page.querySelector('.slider');
const tabList = slider.querySelectorAll('.js-tab');
const tabContentList = page.querySelectorAll('.js-tab-content');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const scrollBottom = scrollTop + window.innerHeight;
  const scrollCenter = scrollTop + window.innerHeight / 2;
  let selectedTab = 0;
  const tabInViewport = [];
  tabContentList.forEach((tabContent, index) => {
    let bottomOfTabContent = tabContent.offsetTop + tabContent.offsetHeight;
    if (bottomOfTabContent > scrollTop && bottomOfTabContent < scrollBottom ||
      tabContent.offsetTop > scrollTop && tabContent.offsetTop < scrollBottom) {
      tabInViewport.push(index);
    }
  });

  let minDistance = Number.MAX_VALUE;
  tabInViewport.forEach((index) => {
    const tabContent = tabContentList[index];
    const titleCenter = tabContent.offsetTop + tabContent.offsetHeight / 2;
    let distance = Math.abs(scrollCenter - titleCenter);
    if (distance < minDistance) {
      selectedTab = index;
      minDistance = distance;
    }
  });

  tabList.forEach((tab, index) => {
    if (index === selectedTab) {
      tab.classList.add('slider__tab_active');
    } else {
      tab.classList.remove('slider__tab_active');
    }
  });
});
