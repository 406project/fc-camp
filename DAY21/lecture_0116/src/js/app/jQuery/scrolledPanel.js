require('jquery');
jQuery.noConflict(true)(function($) {

	// 문서객체 참조 DOM Reference
	// 상태 캐시 Cache of Elements State
	var $window               = $(window),
		$scrolled_fixed       = $('.scrolled-fixed'),
		scrolled_fixed_offset = $scrolled_fixed.offset(),
		scrolled_target_pos   = scrolled_fixed_offset.top - 30,
		scrolled_fixed_config = {
			'position': 'fixed',
			'top'     :  30,
			'left'    :  scrolled_fixed_offset.left,
			'width'   :  $scrolled_fixed.outerWidth(),
			'z-index' : 10000
		};

	// 이벤트 핸들링 Event Handling
	$window.on('scroll', scrolledCheckAction);

	// 이벤트 핸들러 Event Handler
	function scrolledCheckAction () {
		if ( $window.scrollTop() > scrolled_target_pos ) {
			activeScrollFixed();
		} else {
			deactiveScrollFixed();
		}
	}

	// 콜백 함수 Callback Functions
	function activeScrollFixed() {
		$scrolled_fixed
			.addClass('active-fixed')
			.removeClass('deactive-fixed')
			.css( scrolled_fixed_config );
	}

	function deactiveScrollFixed() {
		$scrolled_fixed
			.removeClass('active-fixed')
			.addClass('deactive-fixed')
			.removeAttr('style');
	}

});