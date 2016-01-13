angular.module('AppComponents')
.factory('membersFactory', ['$http', membersFactory]);

function membersFactory($http) {

	// 사용자 정보를 담을 배열 초기 값 설정
	var users = [];

	// Ajax 호출
	$http
		// randomuser.me에서 랜덤 사용자 정보 JSON 요청
		.get('https://randomuser.me/api/?results=40&gender=female')
		// 사용자 정보를 성공적으로 전달 받은 후 실행
		.then(function(response) {
			// 전달 받은 JSON 데이터에서 필요한 user 속성 내부 값을
			// 전달 받은 후, users 빈 배열에 추가
			angular.forEach(response.data.results, function(item) {
				users.push( item.user );
			});
		});

		// 정리된 users 배열을 반환하는 함수
		return function() {
			return users;
		};

}