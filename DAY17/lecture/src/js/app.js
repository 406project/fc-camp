/*! app.js © yamoo9.net, 2016 */
'use strict';

// 모듈
// require('modernizr');
require('jquery');
require('angular');

// ------------------------------
// jQuery
// ------------------------------
// jQuery.noConflict(true)(function($) {
// 	console.log($().jquery);
// 	$('body').append('<p>jQuery 로딩...</p>');
// });


// ------------------------------
// AngularJS
// ------------------------------
angular.module('LectureApp', [])
	// 부트 스트랩 과정에서
	// run()을 통해 %rootScope를 사용하는 것보다는
	// 컨틀롤러로 제어하는 것을 권장
	.run(function($rootScope) {
		$rootScope.app_name = 'LectureApp';
	});