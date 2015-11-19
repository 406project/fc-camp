// 네임스페이스 DOM
var DOM = (function(global, undefined){
	'use strict';

	// 호이스팅 고려 영역 최상단에 변수 선언
	var _toString,
		_getStyle,
		_addEvent,
		_removeEvent;

	/**
	 * ----------------------------------------------------------------
	 * 데이터 유형 체크
	 * ----------------------------------------------------------------
	 */
	_toString = Object.prototype.toString;

	function _isType(data, type) {
		return _toString.call(data).slice(8, -1).toLowerCase() === type;
	}

	function _isObject(data) {
		return _isType(data, 'object');
	}

	function _isArray(data) {
		return _isType(data, 'array');
	}

	function _isFunction(data) {
		return _isType(data, 'function');
	}



	/**
	 * ----------------------------------------------------------------
	 * DOM 조작
	 * ----------------------------------------------------------------
	 */

	// DOM 조작(HTML 코드 삽입)
	// ----------------------------------------------------------------
	function _beforeHTML(el, previousElCode) {
		el.insertAdjacentHTML('beforebegin', previousElCode);
	}

	function _afterHTML(el, nextElCode) {
		el.insertAdjacentHTML('afterend', nextElCode);
	}

	function _appendHTML(parentEl, childElCode) {
		parentEl.insertAdjacentHTML('beforeend', childElCode);
	}

	function _prependHTML(parentEl, childElCode) {
		parentEl.insertAdjacentHTML('afterbegin', childElCode);
	}

	// DOM 조작(요소 삽입)
	// ----------------------------------------------------------------
	function _firstChild(el) {
		var children = el.childen;
		return children ? children[0] : null;
	}

	function _lastChild(el) {
		var children = el.childen;
		return children ? children[children.length - 1] : null;
	}

	function _before(targetEl, el) {
		targetEl.parentNode.insertBefore(el, targetEl);
	}

	function _append(targetEl, el) {
		targetEl.appendChild(el);
	}

	function _prepend(targetEl, el) {
		var first_child = _firstChild(targetEl);
		targetEl.insertBefore(el, first_child);
	}



	// 객체 리터럴 맵 속성 복사
	// ----------------------------------------------------------------
	function _assignObjectAttributes(element, attributes) {
		for ( var key in attributes ) {
			var value = attributes[key];
			element.setAttribute(key, value);
		}
	}

	// 속성 설정
	// ----------------------------------------------------------------
	function _attr(element, attributes) {
		// 데이터 유형 체크 (validation)
		if ( !element || !element.nodeName || !_isObject(attributes) ) {
			// console.error('전달된 데이터 유형(DOM객체, 객체)을 체크해주세요.');
			throw {
				'name'    : '데이터 유형 오류',
				'message' : '전달된 데이터 유형(DOM객체, 객체)을 체크해주세요.'
			}
		}
		_assignObjectAttributes(element, attributes);
	}

	// CSS 설정
	// ----------------------------------------------------------------
	_getStyle = (function(){
		var __getStyle;
		if ( global.getComputedStyle ) {
			__getStyle = function (el, prop) {
				return global.getComputedStyle(el, null)[prop];
			}
		} else {
			__getStyle = function (el, prop) {
				return el.currentStyle[prop];
			}
		}
		return __getStyle;
	})();

	function _setStyle(el, prop, value) {
		el.style[prop] = value;
	}

	// 팩토리 패턴 (어떤 유형을 전달하는가에 따라서 각기 달리 처리)
	function _css(el, prop, value) {
		// CSS 선언 문자열 전달 시 처리되는 구문
		if ( typeof prop === 'string' && prop.indexOf(':') > -1 ) {
			el.style.cssText = prop;
		}
		// prop 전달인자 값이 객체(CSS Map)일 때 처리되는 구문
		if ( _isObject(prop) ) {
			_assignObjectAttributes(el, prop);
		}
		// 값을 가져오거나, 설정(단일 속성)하는 코드
		if (!value) {
			return _getStyle(el, prop);
		} else {
			_setStyle(el, prop, value);
		}
	}

	/**
	 * ------------------------------------------
	 * 진보 이벤트 모델 (크로스 브라우징)
	 * W3C 표준 모델
	 * .addEventListener(type, handler, capture);
	 * MS 비표준 모델
	 * .attachEvent('on'+type, handler);
	 * 오래된 이벤트 모델
	 * ['on'+type] = handler;
	 * ------------------------------------------
	 */

	// 무엇을 만드나?
	// 재사용 가능한 함수를 만든다.
	// 진보 이벤트 모델을 표준/비표준을 분기하는 재사용 함수

	// ------------------------------------------
	// STEP 1.
	// 일반 함수 유형으로 제작은 쉬우나, 함수 호출 시
	// 매번 확인한 조건을 계속 확인해야 하는 문제가 있음.
	// ------------------------------------------

	// function _addEvent(el, type, handler) {
	// 	if ( global.addEventListener ) {
	// 		// W3C 표준 이벤트 모델
	// 		el.addEventListener( type, handler );
	// 	} else if ( global.attachEvent ) {
	// 		// MS 비표준 이벤트 모델
	// 		el.attachEvent('on'+type, handler );
	// 	} else {
	// 		// 오래된 이벤트 모델
	// 		el['on'+type] = handler;
	// 	}
	// }

	// ------------------------------------------
	// STEP 2.
	// 조건은 한번만 확인하면 되므로 함수 밖으로 조건을 뺌
	// 다만 호이스팅(Hoisting) 문제로 함수 표현식으로 변경
	// ------------------------------------------

	// var _addEvent;

	// if ( global.addEventListener ) {
	// 	_addEvent = function(el, type, handler) {
	// 		// W3C 표준 이벤트 모델
	// 		el.addEventListener( type, handler );
	// 	}
	// } else if ( global.attachEvent ) {
	// 	_addEvent = function(el, type, handler) {
	// 		// MS 비표준 이벤트 모델
	// 		el.attachEvent('on'+type, handler );
	// 	}
	// } else {
	// 	_addEvent = function(el, type, handler) {
	// 		// 오래된 이벤트 모델
	// 		el['on'+type] = handler;
	// 	}
	// }

	// ------------------------------------------
	// STEP 3.
	// 즉시 실행 함수(IIFE) 패턴을 사용하여 확인해야 할 조건은
	// 한 번만 시행하되, 브라우저가 지원하는 유형의 함수를 선택
	// 반환함.
	// ------------------------------------------

	_addEvent = (function(){
		var __addEvent;

		if ( global.addEventListener ) {
			__addEvent = function(el, type, handler) {
				// W3C 표준 이벤트 모델
				el.addEventListener( type, handler );
			}
		} else if ( global.attachEvent ) {
			__addEvent = function(el, type, handler) {
				// MS 비표준 이벤트 모델
				el.attachEvent('on'+type, handler );
			}
		} else {
			__addEvent = function(el, type, handler) {
				// 오래된 이벤트 모델
				el['on'+type] = handler;
			}
		}

		return __addEvent;
	})();

	_removeEvent = (function(){
		var __removeEvent;
		if ( global.removeEventListener ) {
			__removeEvent = function(el, type, handler) {
				el.removeEventListener(type, handler);
			};
		} else if ( global.detachEvent ) {
			__removeEvent = function(el, type, handler) {
				el.detachEvent('on'+type, handler);
			};
		} else {
			__removeEvent = function(el, type, handler) {
				// 구형 이벤트 모델에서 이벤트를 제거하는 방법은
				// null을 대입하는 것. (초기 값)
				el['on'+type] = null;
			};
		}
	})();


	/**
	 * --------------------------------
	 * 반환되는 DOM 객체 (공개)
	 * --------------------------------
	 */
	return {

		'isObject'    : _isObject,
		'isArray'     : _isArray,
		'isFunction'  : _isFunction,

		'attr'        : _attr,
		'css'         : _css,

		'prependHTML' : _prependHTML,
		'appendHTML'  : _appendHTML,
		'beforeHTML'  : _beforeHTML,
		'afterHTML'   : _afterHTML,

		'firstChild'  : _firstChild,
		'lastChild'   : _lastChild,
		'append'      : _append,
		'prepend'     : _prepend,
		'before'      : _before,

		'on'          : _addEvent,
		'off'         : _removeEvent

	};

})(window);