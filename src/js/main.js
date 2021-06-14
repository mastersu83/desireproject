let openMenu = document.querySelector('.header__btn');
let menu = document.querySelector('.rightside-menu');
let closeMenu = document.querySelector('.rightside-menu__close');

function showMenu() {
	menu.classList.remove('rightside-menu--close');
}

function hideMenu() {
	menu.classList.add('rightside-menu--close');
}

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);

$('.blog__slider').slick({
	slidesToShow: 1,
	dots: true,
	arrows: true,
});
$('.hero__slider').slick({
	slidesToShow: 1,
	dots: true,
	arrows: false,
});
