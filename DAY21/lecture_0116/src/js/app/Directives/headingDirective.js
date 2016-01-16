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
			'h2': '@',
			'equal': '='
		},
		'template': '<header> <h1>{{h1}}</h1><h2>{{h2}}</h2> <p>{{equal.h1 + ", " + equal.h2}}</p></header>',
		'link': function(scope, element, attributes, controller) {
			console.log( scope, element, attributes, controller );
		},
		'controller': function($scope) {
			console.log( 'this is yamoo9-heading directive controller' );
			console.log( $scope );
		}
	};

	// 디렉티브 정의 객체 반환
	return DDO;

});
