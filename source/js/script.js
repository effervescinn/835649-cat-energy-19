var navMain = document.querySelector('.page-header__container');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__container--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header__container--closed')) {
    navMain.classList.remove('page-header__container--closed');
    navMain.classList.add('page-header__container--opened');
  } else {
    navMain.classList.add('page-header__container--closed');
    navMain.classList.remove('page-header__container--opened');
  }
});
