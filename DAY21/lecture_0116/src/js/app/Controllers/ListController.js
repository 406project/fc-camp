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
	$scope.search        = '';
	$scope.sort_option   = '';

	// 사용자가 검색한 search 모델 데이터 값을 감시(Watch)
	$scope.$watch('search', function(newValue, oldValue) {
		if ( angular.isDefined(newValue) ) {
			membersService.doSearch( newValue );
		}
	});

	// 사용자가 셀렉트 메뉴, 정렬 버튼을 클릭했을 때, 모델 데이터 값을 감시
	$scope.$watch('order', function(newValue) {
		if ( angular.isDefined(newValue) ) {
			membersService.doOrder( newValue );
		}
	});

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
		var user_input_search = $scope.search;
		// 사용자 입력 검색어 존재할 경우 조건 처리
		if( user_input_search ) {
			// 사용자 입력 검색어 민감한 검수
			// [ name, sex, email, phonenumber ]
			return user.name.indexOf( user_input_search )        === 0 ||
				   user.sex.indexOf( user_input_search )         === 0 ||
				   user.email.indexOf( user_input_search )       === 0 ||
				   user.phonenumber.indexOf( user_input_search ) === 0;
		}
		return true;
	};

	// 무한 스크롤 이벤트 발동 시, 처리되는 loadMore 메소드
	$scope.loadMore = function() {
		console.log( 'loading....' );
		membersService.loadMore();
	};

}