const tablinks = document.querySelectorAll('.tab-links');
const tabcontents = document.querySelectorAll('.tab-contents');
const tabtitle = document.querySelector('.tab-titles');
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#header');
const allSections = document.querySelectorAll('.container');

// Reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// sticky navigation
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(section1);

// Tabbed component
const handlerHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('nav').querySelector('.logo');

    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handlerHover.bind(0.5));

nav.addEventListener('mouseout', handlerHover.bind(1));

tabtitle.addEventListener('click', function (e) {
  const click = e.target.closest('.tab-links');

  tablinks.forEach(t => t.classList.remove('active-link'));
  tabcontents.forEach(t => t.classList.remove('active-tab'));

  if (!click) return;
  click.classList.add('active-link');
  document
    .querySelector(`.tab-contents--${click.dataset.tab}`)
    .classList.add('active-tab');
});

let sidemenu = document.getElementById('sidemenu');

function openMenu() {
  sidemenu.style.right = '0';
}

function closeMenu() {
  sidemenu.style.right = '-200px';
}

let x = ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.container, .header-text', { origin: 'top' });
ScrollReveal().reveal(' .header-text h1, .about-col-2 ', { origin: 'left' });

const newF = function () {
  console.log('Welcome here');
};

newF();
