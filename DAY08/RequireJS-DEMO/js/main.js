// RequireJS 환경 설정
require.config({

	'baseUrl': 'js/',

	'paths': {
		'Counter':   'modules/module-Counter',
		'Type':      'modules/module-Type',
		'Events':    'modules/module-Events',
		'DOM':       'modules/module-DOM',
		'DOM.css':   'modules/module-DOM.css',
		'jquery':    'vender/jquery-2.1.4.min',
		'modernizr': 'vender/modernizr-custom.min'
	},

	// 'urlArgs': 'ts=' + (new Date()).getTime()

});


// 모듈 정의(define), 사용(require)
// ---------------------------------

require([
	'jquery',
	// 'DOM.css'
], function($) {
	'use strict';

	console.log( $().jquery );

});