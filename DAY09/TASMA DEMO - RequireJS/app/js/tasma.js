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

function renderTask( task ) {
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
	var $tasksArr = $.map( tasks, renderTask );
	$.$TASMA.find('.tasks-list').empty().append($tasksArr);
}

function renderNew() {
	var $new_task = renderTask({});
	$.$TASMA.find('.tasks-list').prepend( $new_task );
}

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
	renderNew();
}

function render() {
	renderTasks( dataLoad() );
}

function removeTask(event) {
	var $target = $(event.target);
	$target.closest('.task').remove();
}

function removeAllTasks() {
	dataClear();
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
	dataSave( tasks );
}

function cancelTask() {
	render();
}



/**
 * [App - Main]
 * - registerEventHandler()
 * - init()
 * --------------------------------
 */

function registerEventHandler() {
	$.$TASMA.find('.button.new').on('click', addTask);
	$.$TASMA.find('.tasks-list').on('click', '.button.remove', removeTask);
	$.$TASMA.find('.button.remove-all').on('click', removeAllTasks);
	$.$TASMA.find('.button.save').on('click', saveTask);
	$.$TASMA.find('.button.cancel').on('click', cancelTask);
}

function init() {
	$.$TASMA = $('#TASMA');
	registerEventHandler();
	render();
}

$(document).ready( init );
// $(init);