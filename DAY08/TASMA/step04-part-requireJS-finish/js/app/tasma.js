define(['jquery', 'app/controller/tasmaController'], function($, Tasks) {
	'use strict';

	var $TASMA = $.data( document.body, '$TASMA');
	// var $TASMA = $('#TASMA');

	function registerEventsHandler() {
		$TASMA.find('.button.new').on('click', Tasks.add);
		$TASMA.find('.button.remove-all').on('click', Tasks.removeAll);
		$TASMA.find('.tasks-list').on('click', '.button.remove', Tasks.remove);
		$TASMA.find('.button.save').on('click', Tasks.save);
		$TASMA.find('.button.cancel').on('click', Tasks.cancel);
	}

	function init() {
		registerEventsHandler();
		Tasks.render();
	}

	return {
		'init': init
	};

});