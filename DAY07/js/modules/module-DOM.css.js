// [의존 모듈]
// window.Type
// window.DOM

(function(global, Type, DOM){
	'use strict';

	var _getStyle, _setStyle, _css;

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
		if ( Type.isString(prop) && prop.indexOf(':') > -1 ) {
			el.style.cssText = prop;
		}
		// prop 전달인자 값이 객체(CSS Map)일 때 처리되는 구문
		if ( Type.isObject(prop) ) {
			DOM.elementSets(el, prop);
		}
		// 값을 가져오거나, 설정(단일 속성)하는 코드
		if (!value) {
			return _getStyle(el, prop);
		} else {
			_setStyle(el, prop, value);
		}
	}



	// ------------------------------------------------------
	// DOM.prototype 확장
	DOM.extend('css', function(prop, value) {
		this.each(function(el, index) {
			_css(el, prop, value);
		});
	});

})(this, this.Type, this.DOM);