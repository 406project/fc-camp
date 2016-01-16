angular.module('AppComponents')
.service('membersService', ['membersFactory', membersService]);

function membersService(membersFactory) {

	var service = this;

	// 컨트롤러가 공유하기 위한 서비스 객체 속성
	service.selected_user = null;

	// 걸러낸 데이터를 담을 빈 배열
	// service.users = [];
	// 서버에 전송할 사용자 검색 입력 초기화
	service.search = null;
	service.order = null;

	// 무한 스크롤링 관련 속성 정의
	service.resetRequest = function(page_number) {
		page_number        = page_number || 0;
		service.page       = page_number;
		service.has_more   = true;
		service.is_loading = false;
		service.users      = [];
	};

	// 초기 실행
	service.resetRequest();

	// 데이터 로딩 서비스의 메소드
	service.loadData = function() {
		var params;
		// 서비스를 통해 데이터를 로딩하기 전에 다음 데이터가 있는지 유무 확인
		// 현재 데이터를 로딩 중인지 확인하여 로딩 중이 아닐 때 처리
		if ( service.has_more && !service.is_loading ) {

			service.is_loading = true;

			params = {
				'page':     service.page,
				'search':   service.search,
				'ordering': service.order
			};

			membersFactory.get(params, function(response) {
				angular.forEach(response.results, function(user) {
					// user is Object {}., new membersFactory 생성자 사용 시, $resouce 객체 생성(메소드 사용 가능)
					service.users.push( new membersFactory(user) );
				});
				// 더 이상 가져올 데이터가 없을 경우 조건 값을 변경
				if ( !response.next ) {
					service.has_more = false;
				}
				// console.log( response );
				service.is_loading = false;
			});
		}

	};

	service.loadMore = function() {
		if ( service.has_more && !service.is_loading ) {
			service.page += 1;
			service.loadData();
		}
	};

	service.doSearch = function(search) {
		service.resetRequest(1);
		service.search = search;
		service.loadData();
	};

	service.doOrder = function(order) {
		service.resetRequest(1);
		service.order = order;
		service.loadData();
	};

}