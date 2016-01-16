/*! app.js © yamoo9.net, 2016 */
'use strict';

// CommonJS 진영의 모듈 로딩 방식
require('modernizr');
require('angular');
require('angular-resource');
require('angular-infinite-scroll');
require('spin.js');
require('angular-spinner');

// ------------------------------
// jQuery
// ------------------------------
// jQuery Scrolled Panel 모듈 호출
require('./app/jQuery/scrolledPanel');


// ------------------------------
// AngularJS
// ------------------------------
// [AngularJS 모듈 정의]
angular.module('AppComponents', ['ngResource']);
angular.module('RandomUserDataApp', ['AppComponents', 'infinite-scroll', 'angularSpinner'])
.config(['$httpProvider', '$resourceProvider', appConfig]);

function appConfig( $httpProvider, $resourceProvider ) {
	// JWT을 사용하여 허락된 사용자만 데이터를 가져올 수 있도록 저작자 토큰 설정
	$httpProvider.defaults.headers.common.Authorization = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
	// 서버(백-엔드)에서 계산된 URL 처리 시에 '/'를 제거하지 않는 설정
	$resourceProvider.defaults.stripTrailingSlashes = false;
}

// Controller 모듈 호출
require('./app/Controllers/ListController');
require('./app/Controllers/DetailsController');

// Services 호출
require('./app/Services/membersFactory');
require('./app/Services/membersService');

// Filters 호출
require('./app/Filters/genderFilter');
require('./app/Filters/removeXFilter');