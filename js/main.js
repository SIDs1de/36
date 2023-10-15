window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const html = document.querySelector('html');

  const linksActivate = () => {
    const btns = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('.header');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.remove('_menu-open')
        html.classList.remove('_menu-open')
        const sectionName = e.target.getAttribute('href');
        let section = null;
        try {
          section = document.querySelector(sectionName);
        } catch {
        }
        if (section) {
          const top = section.getBoundingClientRect()['y'];
          window.scrollTo({
            top: top + window.pageYOffset,
            behavior: 'smooth'
          })
        }
      })
    })
  }

  const collegeHoverActivate = () => {
    const items = document.querySelectorAll('.catalog__item');
    items.forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        e.target.classList.add('hovered')
      })
      item.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('hovered')
      })
    })
  }

  const openCloseHeaderBurger = () => {
    const headerBurgerBtn = document.querySelector('.header__burger');
    headerBurgerBtn.addEventListener('click', () => {
      body.classList.toggle('_menu-open')
      html.classList.toggle('_menu-open')
    })
  }

  openCloseHeaderBurger();
  linksActivate();
  collegeHoverActivate();
})