define([], function() {
	'use strict';

	var localStorage = window.localStorage,
		stringify    = window.JSON.stringify,
		parse        = window.JSON.parse,

		data_name    = 'TASMA';

	// 유효성 검사
	if ( !localStorage || !stringify || !parse ) {
		return console.error('로컬스토리지 또는 JSON 객체를 사용 중인 브라우저에서 지원하지 않습니다.');
	}

	// 데이터 읽기
	function loadData() {
		var data = localStorage.getItem( data_name );
		if ( data ) {
			return parse( data );
		}
		return [];
	}
	// 데이터 저장
	function saveData( data ) {
		data = stringify( data );
		localStorage.setItem( data_name, data );
	}
	// 데이터 제거
	function clearData() {
		localStorage.removeItem( data_name );
	}

	// 모듈 객체 반환
	return {
		'load'  : loadData,
		'save'  : saveData,
		'clear' : clearData
	};

});