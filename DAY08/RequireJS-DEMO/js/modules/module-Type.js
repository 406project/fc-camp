define([], function() {
	'use strict';

	var _toString = Object.prototype.toString;

	function _isType(data, type) {
		return _toString.call(data).slice(8, -1).toLowerCase() === type;
	}

	function _isNumber(num) {
		return _isType(num, 'number');
	}

	function _isString(str) {
		return _isType(str, 'string');
	}

	function _isBoolean(boo) {
		return _isType(boo, 'boolean');
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

	function _isNull(nu) {
		return _isType(nu, 'null');
	}

	function _isUndefined(un) {
		return _isType(un, 'undefined');
	}

	function _isDate(date) {
		return _isType(date, 'date');
	}

	function _isRegExp(reg) {
		return _isType(reg, 'regexp');
	}

	return  {
		isNumber    : _isNumber,
		isString    : _isString,
		isBoolean   : _isBoolean,
		isObject    : _isObject,
		isFunction  : _isFunction,
		isArray     : _isArray,
		isNull      : _isNull,
		isUndefined : _isUndefined,
		isDate      : _isDate,
		isRegExp    : _isRegExp
	};
});