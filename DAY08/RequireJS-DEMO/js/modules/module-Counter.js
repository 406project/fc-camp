define([], function() {
	'use strict';

	var _count = 0;

	function _getCount() {
		return _count;
	};
	function _setCount(value) {
		_count = value;
	};
	function _resetCount() {
		_setCount(0);
	};
	function _incrementCount() {
		return ++_count;
	};
	function _decrementCount() {
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

});