/*!
 * fc-toggleGrid.js © yamoo9.net, 2015
 * ------------------------------------------
 * 화면 단에 그리드를 가득 채워서 표시합니다.
 * 960px, 12컬럼, 컬럼 폭 60px, 거터 폭 10+10px
 * .container 요소는 화면 가운데 정렬
 * 버튼을 그린 다음에 그 버튼을 클릭하면
 * 그리드가 토글 되는 기능 구현
*/
(function(){
	'use strict';

	// 탐색
	var toggle_grid_btn = document.createElement('i'), // 생성
		container       = document.querySelector('.container'),
		class_name      = 'grid',

		toggleGrid = function (event) {
			var type = event.type,
				key  = event.keyCode;
			if (
				type === 'click' ||
				( type === 'keydown' && ( key === 13 || key === 32 ) )
			) {
				container.classList.toggle(class_name);
			}
		};

	console.log( toggle_grid_btn );

	// 속성 추가
	// class :: Legacy DOM (HTML DOM) -> id, title, className
	// role
	// aria-label
	// tabindex

	// 과거 방식으로 속성 값을 설정
	// toggle_grid_btn.className = 'fa fa-navicon';

	// 새로운 속성은 새로운 방식으로 값을 설정(SET)
	toggle_grid_btn.setAttribute('role', 'button');
	toggle_grid_btn.setAttribute('aria-label', '토글 그리드');
	toggle_grid_btn.setAttribute('tabindex', 0);
	toggle_grid_btn.setAttribute('class', 'fa fa-navicon');

	// jQuery 코드
	$('<i>')
		.attr('role', 'button')
		.attr('aria-label', '토글 그리드')
		.attr('tabindex', 0)
		.attr('class', 'fa fa-navicon')

	var toggle_grid_btn_attr_map = {
		'role'       : 'button',
		'aria-label' : '토글 그리드',
		'tabindex'   : 0,
		'class'      : 'fa fa-navicon'
	};

	$('<i>').attr( toggle_grid_btn_attr_map );

	toggle_grid_btn.onclick   = toggleGrid;
	toggle_grid_btn.onkeydown = toggleGrid;

}());
