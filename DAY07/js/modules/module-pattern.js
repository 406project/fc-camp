/**
 * --------------------------------
 * Javascript 모듈 패턴
 * RequireJS
 * IIFE (즉시 실행 함수)
 * --------------------------------
 */

var Counter = (function(){
	'use strict';

	var _count = 0,
		_getCount = function() {
			return _count;
		},
		_setCount = function(value) {
			_count = value;
		},
		_resetCount = function() {
			_setCount(0);
		},
		_incrementCount = function() {
			return ++_count;
		},
		_decrementCount = function() {
			return --_count;
		};

	// 반환되는 객체 : Singleton
	return  {
		'get'       : _getCount,
		'set'       : _setCount,
		'reset'     : _resetCount,
		'increment' : _incrementCount,
		'decrement' : _decrementCount
	};

})();

// var DOM = (function(global, doc){
// 	// 의존성 관리

// 	// 전역과 구분되는 독립된 공간(Scope)
// 	// 공개/비공개 멤버(변수, 함수) 구성
// 	// 필요에 따라서 비공개 멤버를 공개할 수도 있다.

// 	var _DOM = function() {

// 	};

// 	// 프로토타입 객체
// 	_DOM.prototype = {

// 	};

// 	// 함수를 반환하는 경우
// 	// 일반, new 생성자(Constructor) 함수
// 	return _DOM;

// 	// 객체를 반환하는 경우
// 	return {

// 	};

// })(window, window.document);


// var $$body = new DOM('body');

// $$body.css({
// 	'color': '',
// 	'font-size': ''
// }).on('click keydown', function() {

// });

