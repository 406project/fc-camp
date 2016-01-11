// angular 컨트롤러 정의
angular.module('AppComponents')
.controller('ListController', ['$scope', 'membersService', ListController]);

/**
 * ListController
 * @param {Object} $scope         View와 연결된 VM 객체
 * @param {Object} membersService 멤버를 처리하는 서비스 객체
 */
function ListController($scope, membersService) {

	// ----------------------------------------------------------------
	// 스코프 속성 설정
	// ----------------------------------------------------------------
	// 서비스 객체 할당
	$scope.contact       = membersService;
	// 초기 값 선언
	$scope.selected_user = null;
	$scope.search        = {};
	$scope.sort_option   = '';

	// ----------------------------------------------------------------
	// 스코프 메소드 설정
	// ----------------------------------------------------------------
	$scope.selectedUser = function( user ) {
		// 서비스 객체의 selected_user 속성을 변경 (업데이트)
		membersService.selected_user = user;
		$scope.selected_user         = user;
	};

	// 민감한 검색(대소문자 구분, 완벽한 일치)를 확인하는
	// 검색 함수($scope 객체의 메소드)
	$scope.sensitiveSearch = function(user) {
		// 사용자 입력 검색어 변수(Cache)
		var user_input_search = $scope.search.$;
		// 사용자 입력 검색어 존재할 경우 조건 처리
		if( user_input_search ) {
			// 사용자 입력 검색어 민감한 검수
			// [ username, name.first, email, phone ]
			return user.username.indexOf( user_input_search )   === 0 ||
				   user.name.first.indexOf( user_input_search ) === 0 ||
				   user.email.indexOf( user_input_search )      === 0 ||
				   user.phone.indexOf( user_input_search )      === 0;
		}
		return true;
	};

}