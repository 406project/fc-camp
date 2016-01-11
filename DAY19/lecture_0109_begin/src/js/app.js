/*! app.js © yamoo9.net, 2016 */
'use strict';

// CommonJS 진영의 모듈 로딩 방식
require('modernizr');
require('angular');

// ------------------------------
// jQuery
// ------------------------------
// jQuery Scrolled Panel 모듈 호출
require('./app/jQuery/scrolledPanel');


// ------------------------------
// AngularJS
// ------------------------------
// [AngularJS 모듈 정의]
angular.module('AppComponents', []);
angular.module('RandomUserDataApp', ['AppComponents']);

// Controller 모듈 호출
require('./app/Controllers/ListController');
require('./app/Controllers/DetailsController');

// Services 호출
require('./app/Services/membersFactory');
require('./app/Services/membersService');