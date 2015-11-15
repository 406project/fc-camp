/*! fc-toggleGrid.js, jQuery 버전 © yamoo9.net, 2015 */
(function(global, $, undefined){
	'use strict';

	var	class_name        = 'grid',
		// 탐색
		$body             = $(document.body),
		$link_style       = $('[href="css/style.css"]'),
		$container        = $('.container'),
		// 생성
		$link_fontawesome = $('<link>'),
		$toggle_grid_btn  = $('<i>'),

		// 토글그리드 함수 정의
		toggleGrid = function (event) {
			var type = event.type,
				key  = event.keyCode;
			if ( type === 'click' || type === 'keydown' && ( key === 13 || key === 32 ) ) {
				$container.toggleClass( class_name );
			}
		};

	// 속성 조작
	$link_fontawesome.attr({
		'rel'  : 'stylesheet',
		'href' : 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
	});

	$toggle_grid_btn.attr({
		'role'       : 'button',
		'aria-label' : '토글 그리드',
		'tabindex'   : 0,
		'class'      : 'fa fa-navicon toggle-grid-btn'
	});

	// DOM에 추가
	$link_style.before( $link_fontawesome );
	$body.prepend( toggle_grid_btn );

	// 이벤트 핸들러 연결
	$toggle_grid_btn.on('click keydown', toggleGrid);

}(window, window.jQuery));