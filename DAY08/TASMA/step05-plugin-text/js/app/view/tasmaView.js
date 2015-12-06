define(['jquery', 'text!templates/tasmaTemplate.html'], function($, renderTemplate) {
	'use strict';

	var $TASMA = $.data( document.body, '$TASMA', $('#TASMA') );

	function renderNew() {
		$TASMA.find('.tasks-list').prepend( renderTask( {} ) );
	}

	function renderTask( task ) {
		var $task = $( renderTemplate );
		if ( task.complete ) {
			$task.find('.complete').attr('checked', 'checked');
		}
		if ( task.description ) {
			$task.find('.description').val( task.description );
		}
		return $task;
	}

	function renderTasks( tasks ) {
		var $tasksArr = $.map( tasks, renderTask );
		$TASMA.find('.tasks-list').empty().append( $tasksArr );
	}

	return {
		'renderNew'   : renderNew,
		'renderTask'  : renderTask,
		'renderTasks' : renderTasks
	};
});