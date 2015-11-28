// RequireJS 환경 설정
require.config({

	'baseUrl': 'js/',

	'paths': {
		'Counter':       'modules/module-Counter',
		'Type':          'modules/module-Type',
		'Events':        'modules/module-Events',
		'DOM':           'modules/module-DOM',
		'DOM.css':       'modules/module-DOM.css',
		'jquery':        'vender/jquery-2.1.4.min',
		'modernizr':     'vender/modernizr-custom.min',
		'detectizr':     'vender/detectizr',
		// 'backbone':   'vender/backbone',
		// 'underscore': 'vender/underscore'
	},

	'shim': {
		'modernizr': {
			'exports': 'Modernizr'
		},
		'detectizr': {
			'exports': 'Detectizr',
			'deps':    ['modernizr']
		}
		// 'backbone': {
		// 	'exports': 'Backbone',
		// 	'deps': ['jquery', 'underscore']
		// }
	}

	// 'urlArgs': 'ts=' + (new Date()).getTime()

});


// 모듈 정의(define), 사용(require)
// ---------------------------------
require([
	'jquery',
	'detectizr'
	// 'backbone'
	// 'modernizr'
	// 'DOM.css'
], function( $, Detectizr ) {
	'use strict';

	var $section = $('<section role="main">')
			.html('<article>야무 한글 로렘입숨 로렘입숨이란? 디자인을 위한 더미 텍스트!. 하고 거추장스런, 흐르는 해도 꽃처럼 쉬지.</article>');

	var $body = $('body').attr({
		'id':   'dynamic-assing-id',
		'lang': 'ko-KR'
	}).append( $section );

	if ( Modernizr.es5array ) {
		var $supportES5 = $('<p>', {
			'class': 'support-es5',
			'text':  'ECMA Script v5를 지원하는 클라이언(브라우저) 환경입니다.'
		}).prependTo( $body );
	}

	// console.log( Backbone );

	// console.log( Modernizr );

	// console.log( $().jquery );

});