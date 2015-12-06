define(['jquery'], function($) {
	'use strict';

	var $TASMA = $.data( document.body, '$TASMA', $('#TASMA') );

	var renderTemplate = [
		'<li class="task clearfix">',
			'<div class="task-desc">',
				'<input class="complete" type="checkbox">',
				'<input class="description" maxlength="12" type="text" placeholder="등록할 내용을 기입해주세요.">',
			'</div>',
			'<button type="button" class="anim button remove">제거</button>',
		'</li>'
	].join('');

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