/**
 * --------------------------------
 * 데이터 관리 객체 모듈
 * --------------------------------
 * 로드(loadData)
 * 세이브(saveData)
 * 리무브(removeData)
 * --------------------------------
 * window.localStorage 객체
 * window.JSON 객체
 * --------------------------------
 */

var DataManager = (function(storage, JSON){
	'use strict';

	// 객체 판별법
	// 존재 유무를 파악해서 처리하는 과정
	if (typeof storage === 'undefined' || typeof JSON === 'undefined') {
		throw new Error('사용 중인 웹 브라우저는 로컬스토리지 객체 또는 JSON 객체를 지원하지 않습니다.');
	}

		// 모듈 패턴 외부로 내보낼 객체 dataManager
	var dataManager = {},
		// 데이터 이름
		dataName   = '@yamoo9';

	dataManager.loadData = function() {
		// storage에게 dataName 이름의 정보를 저장하고 있는지
		var data = storage.getItem( dataName );
		// 있다면 JSON 객체의 해석(parse) 방법을 통해 데이터를 반환
		if ( data ) {
			return JSON.parse( data );
		}
		// data가 존재하지 않는다면...
		// 빈 배열 객체를 반환
		return [];
	};

	dataManager.saveData = function(data) {
		// storage 객체의 setItem() 메소드를 이용하여
		// 전달 받은 데이터(객체)를 저장합니다.
		// JSON 객체의 stringify() 메소드를 사용하여 문자 형태(직렬화) 저장
		storage.setItem( dataName, JSON.stringify( data ) );
	};

	dataManager.removeData = function() {
		// storage 객체의 removeItem() 메소드를 이용하여
		// dataName에 저장되어 있는 정보를 제거한다.
		storage.removeItem( dataName );
	};

	// 모듈 패턴 외부로 객체 반환
	return dataManager;

})(window.localStorage, window.JSON);