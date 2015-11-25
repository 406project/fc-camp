var Events = (function(global){

	var _addEvent, _removeEvent;

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

		return __removeEvent;
	})();

	return {
		on  : _addEvent,
		off : _removeEvent
	};

})(this);