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
		'jquery': 'vender/jquery-2.1.4.min'
	}
});

// define(id, [dependencies], factory);
define('model/TaskData', [], function() {
	/**
	 * [Model] TaskData
	 * window.localStorage
	 * window.JSON
	 * - load()
	 * - save()
	 * - clear()
	 * --------------------------------
	 */

	var task_name = 'TASMA';

	function dataLoad() {
		var _data = localStorage.getItem( task_name );
		if (_data) {
			return JSON.parse( _data );
		}
		return [];
	}

	function dataSave( data ) {
		data = JSON.stringify( data );
		localStorage.setItem( task_name, data );
	}

	function dataClear() {
		localStorage.removeItem( task_name );
	}

	return {
		'load': dataLoad,
		'save': dataSave,
		'clear': dataClear
	}
});

define('view/TaskRenderer', ['jquery'], function($) {
	'use strict';
	/**
	 * [View] TaskRenderer + Template
	 * - renderTask()
	 * - renderTasks()
	 * - renderNew()
	 * --------------------------------
	 */
	var render_template = [
		'<li class="task clearfix">',
			'<div class="task-desc">',
				'<input class="complete" type="checkbox">',
				'<input class="description" maxlength="24" type="text" placeholder="등록할 내용을 기입해주세요.">',
			'</div>',
			'<button type="button" class="anim button remove">제거</button>',
		'</li>'
	].join('');

	function _renderTask( task ) {
		// task란? 객체
		// {
		// 		'complete': true,
		// 		'description': '...'
		// }
		var $tpl = $( render_template );

		if ( task.complete ) {
			$tpl.find('.complete').attr('checked', 'checked');
		}
		$tpl.find('.description').val( task.description );
		return $tpl;
	}

	function renderTasks(tasks) {
		// tasks란? task 객체를 포함하는 배열(집합)
		// [{"complete":true,"description":"c"},{"complete":false,"description":"b"},{"complete":false,"description":"a"}]
		var $tasksArr = $.map( tasks, _renderTask );
		$.$TASMA.find('.tasks-list').empty().append($tasksArr);
	}

	function renderNew() {
		var $new_task = _renderTask({});
		$.$TASMA.find('.tasks-list').prepend( $new_task );
	}

	return {
		'add': renderNew,
		'renderTasks': renderTasks
	};
});

define('controller/TaskManager',
	['jquery', 'model/TaskData', 'view/TaskRenderer'],
	function($, TaskData, TaskRenderer)
{
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


require(['jquery', 'controller/TaskManager'], function($, TaskManager) {
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