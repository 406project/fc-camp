angular.module('AppComponents')
// 사용자 정의 디렉티브를 정의
.directive('yamoo9Heading', function() {

	// 디렉티브 정의 객체
	var DDO = {
		// 'E' === Element
		// 'A' === Attributes
		// 'C' === Class
		// 'M' === coMment
		'restrict': 'A',
		// 'replace': true,
		// 'transclude': '',
		// 'controller': '',
		// 'controllerAs': '',
		'scope': {
			'h1': '@',
			'h2': '@'
		},
		'template': '<header> <h1>{{h1}}</h1><h2>{{h2}}</h2> </header> <input type="text" data-ng-model="h1" />'
	};

	// 디렉티브 정의 객체 반환
	return DDO;

});
