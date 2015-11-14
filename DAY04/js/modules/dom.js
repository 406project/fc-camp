// 네임스페이스
var DOM = (function(global, undefined){
	'use strict';

	/**
	 * ----------------------------------------------------------------
	 * 데이터 유형 체크
	 * ----------------------------------------------------------------
	 */
	var toString = Object.prototype.toString;

	function _isType(data, type) {
		return toString.call(data).slice(8, -1).toLowerCase() === type;
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
	var _getStyle = (function(){
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
		'before'      : _before

	};

})(window);