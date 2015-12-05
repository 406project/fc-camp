// define(['jquery', 'text!templates/render_template.html'], function($, render_template) {
define(['jquery', 'hbs!templates/render_template'], function($, render_template) {
	'use strict';
	/**
	 * [View] TaskRenderer + Template
	 * - renderTask()
	 * - renderTasks()
	 * - renderNew()
	 * --------------------------------
	 */
	// var render_template = [
	// 	'<li class="task clearfix">',
	// 		'<div class="task-desc">',
	// 			'<input class="complete" type="checkbox">',
	// 			'<input class="description" maxlength="24" type="text" placeholder="등록할 내용을 기입해주세요.">',
	// 		'</div>',
	// 		'<button type="button" class="anim button remove">제거</button>',
	// 	'</li>'
	// ].join('');

	function _renderTask( task ) {
		// task란? 객체
		// {
		// 		'complete': true,
		// 		'description': '...'
		// }
		var $tpl = $( render_template(task) );

		// if ( task.complete ) {
		// 	$tpl.find('.complete').attr('checked', 'checked');
		// }
		// $tpl.find('.description').val( task.description );
		return $tpl;
	}

	function renderTasks(tasks) {
		// tasks란? task 객체를 포함하는 배열(집합)
		// [
		// 	{"complete":true,"description":"c"},
		// 	{"complete":false,"description":"b"},
		// 	{"complete":false,"description":"a"}
		// ]
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