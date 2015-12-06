/*! TASMA © yamoo9.net, 2015 */

require.config({
	'baseUrl': 'js/',
	'paths': {
		'jquery': 'vender/jquery-2.1.4.min'
	}
});

require(['app/tasma'], function(Tasma) {
	'use strict';

	Tasma.init();
});