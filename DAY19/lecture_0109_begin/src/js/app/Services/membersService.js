angular.module('AppComponents')
.service('membersService', ['membersFactory', membersService]);

function membersService(membersFactory){

	// 걸러낸 데이터를 담을 빈 배열
	this.users = membersFactory();

	// 컨트롤러가 공유하기 위한 서비스 객체 속성
	this.selected_user = null;

}