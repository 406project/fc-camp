/**
 * --------------------------------
 * Javascript 모듈 패턴
 * RequireJS
 * IIFE (즉시 실행 함수)
 * --------------------------------
 */

var Module_name = (function(global, doc){

	// 의존성 관리

	// 전역과 구분되는 독립된 공간(Scope)
	// 공개/비공개 멤버(변수, 함수) 구성
	// 필요에 따라서 비공개 멤버를 공개할 수도 있다.

	// 생성자 함수
	var _DOM = function() {};
	// 프로토타입 객체
	_DOM.prototype = {};
	// 함수를 반환하는 경우
	// 일반 또는 new 생성자(Constructor) 함수
	return _DOM;


	// 객체를 반환하는 경우
	// 싱글톤 객체
	return {};

})(window, window.document);