"use strict";

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.section__price .price__item').forEach( price => {
		price.addEventListener('click', () => {
			if(! price.classList.contains('active')) {
				document.querySelector('.section__price .price__item.active').classList.remove('active');
				price.classList.add('active');
			}
		});
	});
});