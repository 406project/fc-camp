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