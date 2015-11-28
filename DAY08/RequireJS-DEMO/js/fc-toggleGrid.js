/*! fc-toggleGrid.js © yamoo9.net, 2015 */
(function(global, DOM){
	'use strict';

	var	class_name       = 'grid',
		button_style_str,
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
		'class'      : 'fa fa-navicon'
	});

	// 버튼 스타일링 CSS 문자열 (배열 → 문자)
	button_style_str = [
		'cursor: pointer;',
		'position: fixed;',
		'z-index: 100000;',
		'top: 15px;',
		'right: 15px;',
		'border: 1px solid;',
		'padding: 0.6em 0.7em;',
		'font-size: 25px;',
		'color: #4a6fd0;',
		'background: #fff;'
	].join('');

	// 대상 요소를 스타일링 (버튼 스타일링 CSS 문자열 전달)
	DOM.css( toggle_grid_btn, button_style_str );

	// DOM에 추가
	DOM.before( link_style , link_fontawesome );
	DOM.prepend( body, toggle_grid_btn );

	// 진보 이벤트 핸들링
	DOM.on( toggle_grid_btn, 'click', toggleGrid );
	DOM.on( toggle_grid_btn, 'keydown', toggleGrid );

}(window, window.DOM));
