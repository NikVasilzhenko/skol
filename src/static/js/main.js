document.addEventListener('DOMContentLoaded', () => {
  
  //smoov scroll
  const anchors = document.querySelectorAll('.js-scroll')
  
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href')

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  //fix header
  let oldScrollY = 0;
  const header = document.querySelector('#js-header-fix'),
        headerHeight = document.querySelector('#js-header').clientHeight,
        burgerBtn = document.querySelector('#js-menu-open');

  window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop,
        dY = scrolled - oldScrollY;
    if(pageYOffset >=  headerHeight){
      header.classList.add('fixed');
      burgerBtn.classList.add('fixed');
      if ( dY < 0 ){
        header.classList.add('scrolled-up');
        burgerBtn.classList.add('scrolled-up');
        header.classList.remove('scrolled-down');
        burgerBtn.classList.remove('scrolled-down');
      } else {
        header.classList.remove('scrolled-up');
        burgerBtn.classList.remove('scrolled-up');
        header.classList.add('scrolled-down');
        burgerBtn.classList.add('scrolled-down');
      }
    }
    if(pageYOffset ===  0){
      header.classList.remove('fixed');
      burgerBtn.classList.remove('fixed');
      header.classList.remove('scrolled-up');
      burgerBtn.classList.remove('scrolled-up');
    }
    oldScrollY = scrolled;
  });
  
  //menu
  document.getElementById('js-menu-open').addEventListener('click', (e) => {
    e.target.classList.toggle('open');
    document.getElementById('js-menu').classList.toggle('open');
    document.querySelector('body').classList.toggle('no-scroll');
  })
});
