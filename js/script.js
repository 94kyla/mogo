$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu,.header__logo_list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.quote__slider').slick();
});
$(document).ready(function () {
	$('.testimonial__slider').slick();
});
let arrow = (document.querySelector(".butArrow"));
let coll = document.getElementsByClassName('collapsible');
for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			content.classList.remove('border');
			arrow.classList.remove('arrowUp');
			arrow.classList.add('arrowDown');
		} else {
			content.style.maxHeight = content.scrollHeight + 'px'
			content.classList.add('border');
			arrow.classList.add('arrowUp');
		}

	});

}