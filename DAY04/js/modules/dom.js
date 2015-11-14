// 네임스페이스
var DOM = (function(global, undefined){
	'use strict';

	function _before(el, previousElCode) {
		el.insertAdjacentHTML('beforebegin', previousElCode);
	}

	function _after(el, nextElCode) {
		el.insertAdjacentHTML('afterend', nextElCode);
	}

	function _append(parentEl, childElCode) {
		parentEl.insertAdjacentHTML('beforeend', childElCode);
	}

	function _prepend(parentEl, childElCode) {
		parentEl.insertAdjacentHTML('afterbegin', childElCode);
	}

	/**
	 * _attr(); 함수에 전달된 객체를 탐색하여 요소에 개별적으로 적용하는 일을 수행
	 * @param  {[DOM element]} element   DOM 객체
	 * @param  {Object} attributes       속성 맵 객체
	 * @return {undefined}
	 */
	function _attr(element, attributes) {
		// 데이터 유형 체크 (validation)
		if ( !element || !element.nodeName || attributes.constructor !== Object ) {
			// console.error('전달된 데이터 유형(DOM객체, 객체)을 체크해주세요.');
			throw {
				'name'    : '데이터 유형 오류',
				'message' : '전달된 데이터 유형(DOM객체, 객체)을 체크해주세요.'
			}
		}

		for ( var key in attributes ) {
			var value = attributes[key];
			element.setAttribute(key, value);
		}
	}

	return {
		'attr'    : _attr,
		'prepend' : _prepend,
		'append'  : _append,
		'before'  : _before,
		'after'   : _after
	};

})(window);