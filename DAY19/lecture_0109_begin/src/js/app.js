/*! app.js © yamoo9.net, 2016 */
'use strict';

// CommonJS 진영의 모듈 로딩 방식
require('modernizr');
require('jquery');
require('angular');

// ------------------------------
// jQuery
// ------------------------------
// jQuery.noConflict(true);
// jQuery Scrolled Panel 모듈 호출
require('./app/jQuery/scrolledPanel');


// ------------------------------
// AngularJS
// ------------------------------
// [AngularJS 모듈 정의]
angular.module('AppControllers', []);
angular.module('RandomUserDataApp', ['AppControllers']);

// Controller 모듈 호출
require('./app/Controllers/ListController');
require('./app/Controllers/DetailsController');

// Services 호출
// Fiters 호출
// Directives 호출

/**
 * --------------------------------
 * 스코프 상속 개념 이해 모듈
 * ----------------------------- */
// var ScopeInherit = angular.module('ScopeInherit', []);

// ScopeInherit.run(['$rootScope', function($rootScope) {
// 	// $rootScope.dynamic_name = 'run 코드를 사용하여 루트 스코프에 속성 정의';
// }]);

// ScopeInherit.controller('ParentCtrl', ['$scope', function($scope){

// }]);

// ScopeInherit.controller('ChildCtrl', ['$scope', function($scope){

// }]);