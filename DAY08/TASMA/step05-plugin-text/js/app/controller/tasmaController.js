define([
	'jquery',
	'app/model/tasmaModel',
	'app/view/tasmaView'
],
function($, Storage, Renderer) {
	'use strict';

	var $TASMA = $.data( document.body, '$TASMA');
	// var $TASMA = $('#TASMA');

	function add() {
		Renderer.renderNew();
	}

	function render() {
		Renderer.renderTasks( Storage.load() );
	}

	function removeAll() {
		Storage.clear();
		render();
	}

	function remove(evt) {
		$( evt.target ).closest( '.task' ).remove();
	}

	function save() {
		var tasks = [],
			$tasks = $TASMA.find('.task');

		$.each( $tasks, function(index, task) {
			var $task = $tasks.eq(index);
			tasks.push({
				'complete': $task.find('.complete').prop('checked'),
				'description': $task.find('.description').val()
			});
		});

		Storage.save( tasks );
	}

	function cancel() {
		render();
	}

	return {
		'add'       : add,
		'render'    : render,
		'removeAll' : removeAll,
		'remove'    : remove,
		'save'      : save,
		'cancel'    : cancel
	};

});