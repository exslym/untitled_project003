import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	const pos = document.documentElement;
	const circle = document.querySelector('.circle');
	const box = document.querySelectorAll('.box')[1];
	pos.addEventListener('mousemove', e => {
		pos.style.setProperty('--x', e.clientX + 'px');
		pos.style.setProperty('--y', e.clientY + 'px');
		circle.classList.add('appearing');
		box.classList.add('appearing');
	});
});
