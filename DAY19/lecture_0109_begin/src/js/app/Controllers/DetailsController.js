// angular 컨트롤러 정의
angular.module('AppComponents')
.controller('DetailsController', ['$scope', 'membersService', DetailsController]);

/**
 * DetailsController
 * @param {Object} $scope         View와 연결된 VM 객체
 * @param {Object} membersService 멤버를 처리하는 서비스 객체
 */
function DetailsController($scope, membersService) {

	// 서비스 객체를 현재 컨트롤러의 스코프 속성에 할당
	$scope.contact = membersService;

};