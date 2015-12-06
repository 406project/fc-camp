/*!
 * tasma.js © 2015
 * ------------------------------------
 *
 * 모듈(Module) 의존 구성
 * Model - View - Controller
 * ------------------------------------
 * Main < Tasks(C) < Data Storage(M)
 * 				   < Renderer(V)
 * ------------------------------------
 */

/**
 * requireJS Configuration
 * --------------------------------
 */
require.config({
	'baseUrl': 'js/',
	'paths': {
		'jquery'    : 'vender/jquery-2.1.4.min',
		'text'      : 'vender/text',
		'templates' : '../templates'
	}
});


require(['jquery', 'modules/TaskManager'], function($, TaskManager) {
	'use strict';

	/**
	 * [App - Main]
	 * - registerEventHandler()
	 * - init()
	 * --------------------------------
	 */

	function _registerEventHandler() {
		$.$TASMA.find('.button.new').on('click', TaskManager.add);
		$.$TASMA.find('.tasks-list').on('click', '.button.remove', TaskManager.remove);
		$.$TASMA.find('.button.remove-all').on('click', TaskManager.removeAll);
		$.$TASMA.find('.button.save').on('click', TaskManager.save);
		$.$TASMA.find('.button.cancel').on('click', TaskManager.cancel);
	}

	function init() {
		$.$TASMA = $('#TASMA');
		_registerEventHandler();
		TaskManager.render();
	}

	$(document).ready( init );
	// $(init);

});