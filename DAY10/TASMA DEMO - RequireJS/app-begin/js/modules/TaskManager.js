define(['jquery', 'modules/TaskData', 'modules/TaskRenderer'], function($, TaskData, TaskRenderer) {
	'use strict';
	/**
	 * [Controller] - TaskManager
	 * - addTask()
	 * - render()
	 * - removeAllTasks()
	 * - removeTask()
	 * - saveTask()
	 * - cancelTask()
	 * --------------------------------
	 */
	function addTask() {
		TaskRenderer.add();
	}

	function render() {
		TaskRenderer.renderTasks( TaskData.load() );
	}

	function removeTask(event) {
		var $target = $(event.target);
		$target.closest('.task').remove();
	}

	function removeAllTasks() {
		TaskData.clear();
		render();
	}

	function saveTask() {
		var tasks = [],
			$tasks = $.$TASMA.find('.task');
		$.each( $tasks , function(index, task) {
			var $task = $tasks.eq(index);
			tasks.push( {
				'complete': $task.find('.complete').prop('checked'), // true, false
				'description': $task.find('.description').val()      // '....'
			} );
		});
		TaskData.save( tasks );
	}

	function cancelTask() {
		render();
	}

	return {
		'add'       : addTask,
		'removeAll' : removeAllTasks,
		'remove'    : removeTask,
		'save'      : saveTask,
		'cancel'    : cancelTask,
		'render'    : render
	};

});