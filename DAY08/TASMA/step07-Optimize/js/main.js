/*! TASMA © yamoo9.net, 2015 */

require.config({
	'baseUrl': 'js/',
	'paths': {
		'jquery'    : 'vender/jquery-2.1.4.min',
		'text'      : 'vender/text',
		'hbs'       : 'vender/require-handlebars-plugin/hbs',
		'templates' : '../templates'
	}
});

require(['app/tasma'], function(Tasma) {
	'use strict';

	Tasma.init();
});