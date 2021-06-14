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

const commentContainer = document.querySelector('.comments__items');
const commentForm = document.querySelector('#formAdd');
const commentInputText = document.querySelector('.comment__input-text');
const nameInput = document.querySelector('.comment__input-name');
const templatecomments = document.querySelector('.template__comments').content;
const avatarImg = document.querySelector('.comments__item-img');
const mail = document.querySelector('.comment__input-mail');
const date = document.querySelector('.comments__date');
const formatter = new Intl.DateTimeFormat('en', {
	month: 'long',
	day: 'numeric',
	year: 'numeric',
});
const month = formatter.format(new Date());

function createCard({ name, text }) {
	const cardItem = templatecomments.cloneNode(true);
	cardItem.querySelector('.comments__item-img').src = 'image/avatar.png';
	cardItem.querySelector('.comments__name').textContent = name;
	cardItem.querySelector('.comments__text').textContent = text;
	cardItem.querySelector('.comments__date').textContent = month;
	commentContainer.prepend(cardItem);
}

function addComment(evt) {
	evt.preventDefault();
	let name = nameInput.value;
	let text = commentInputText.value;
	createCard({ name, text });
	commentInputText.value = '';
	nameInput.value = '';
	mail.value = '';
}

commentForm.addEventListener('submit', addComment);

var today = new Date().getMonth();
