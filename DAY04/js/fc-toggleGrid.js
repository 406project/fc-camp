/*! fc-toggleGrid.js © yamoo9.net, 2015 */
(function(global, DOM){
	'use strict';

	var	class_name       = 'grid',
		// 탐색
		body             = document.body,
		link_style       = document.querySelector('[href="css/style.css"]'),
		container        = document.querySelector('.container'),
		// 생성
		link_fontawesome = document.createElement('link'),
		toggle_grid_btn  = document.createElement('i'),

		// 토글그리드 함수 정의
		toggleGrid = function (event) {
			var type = event.type,
				key  = event.keyCode;
			if ( type === 'click' || type === 'keydown' && ( key === 13 || key === 32 ) ) {
				container.classList.toggle(class_name);
			}
		};

	// 속성 조작
	DOM.attr(link_fontawesome, {
		'rel'  : 'stylesheet',
		'href' : 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
	});

	DOM.attr(toggle_grid_btn, {
		'role'       : 'button',
		'aria-label' : '토글 그리드',
		'tabindex'   : 0,
		'class'      : 'fa fa-navicon toggle-grid-btn'
	});

	// DOM에 추가
	DOM.before( link_style , link_fontawesome );
	DOM.prepend( body, toggle_grid_btn );

	// 이벤트 핸들러 연결
	toggle_grid_btn.onclick   = toggleGrid;
	toggle_grid_btn.onkeydown = toggleGrid;

}(window, window.DOM));
