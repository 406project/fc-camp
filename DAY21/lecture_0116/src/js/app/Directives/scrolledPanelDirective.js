angular.module('AppComponents')
.directive('scrolledPanel', function() {

	// [DDO] Directive Define Object
	return {
		// 제한
		'restrict': 'EA',
		// 대체
		'replace': true,
		// 영역 격리
		'scope': {
			'contact': '='
		},
		// 외부 템플릿 파일 연결
		'templateUrl': 'views/details-template.html',
		// 컨트롤러 연결
		'controller': 'DetailsController',
		// 링크 함수 설정
		'link': function(scope, element, attrs, controller) {
			// element === jqLight Object
			// element[0] === DOM Element Node
			// attrs === 설정된 속성을 담은 객체
			// controller === 연결된 컨트롤러
			// console.log( element, element[0] );
			// console.log( 'scope: ', scope );
			// console.log( 'attrs: ', attrs );
			// console.log( 'controller: ', controller );
			// $('body').jquery // jQuery Version

			// 문서객체 참조 DOM Reference
			// 상태 캐시 Cache of Elements State
			var $window               = angular.element(window),
				$scrolled_fixed       = angular.element('.scrolled-fixed'),
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

		}
	};

});