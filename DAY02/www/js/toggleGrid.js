/*! toggleGrid.js © yamoo9.net, 2015 */

/**
 * 대상 선택
 * --------------------------------
 */
var container = document.querySelector('.container');

// console.log(container);

// // .grid 클래스 설정(추가)
// container.classList.add('grid');

// // .grid 클래스 제거
// container.classList.remove('grid');

// if ( container.classList.contains('grid') ) {
// 	container.classList.remove('grid');
// } else {
// 	container.classList.add('grid');
// }

window.addEventListener('keydown', function(ev) {
	var key = ev.keyCode || ev.which;
	console.log(key === 71 && ev.shiftKey);
	if ( key === 71 && ev.shiftKey ) {
		container.classList.toggle('grid');
	}
});

