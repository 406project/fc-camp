/*! TASMA © yamoo9.net, 2015 */

/**
 * ----------------------------------------
 * 모듈(Module) 의존 구성
 * Model - View - Controller
 * ----------------------------------------
 * Main < Tasks(C) < Data Storage(M)
 * 				   < Renderer(V)
 * ----------------------------------------
 */
(function(global){
	'use strict';

	/**
	 * --------------------------------
	 * 모델(Model)
	 * --------------------------------
	 * 데이터 스토리지
	 * 데이터 읽기/저장/제거
	 * - loadData
	 * - saveData
	 * - clearData
	 */
	var localStorage = global.localStorage,
		stringify    = global.JSON.stringify,
		parse        = global.JSON.parse,

		data_name    = 'TASMA';

	// 유효성 검사
	if ( !localStorage || !stringify || !parse ) {
		return console.error('로컬스토리지 또는 JSON 객체를 사용 중인 브라우저에서 지원하지 않습니다.');
	}

	// 데이터 읽기
	function loadData() {
		var data = localStorage.getItem( data_name );
		if ( data ) {
			return parse( data );
		}
		return [];
	}
	// 데이터 저장
	function saveData( data ) {
		data = stringify( data );
		localStorage.setItem( data_name, data );
	}
	// 데이터 제거
	function clearData() {
		localStorage.removeItem( data_name );
	}

	/**
	 * --------------------------------
	 * 뷰(View)
	 * --------------------------------
	 * 화면에 렌더링
	 * - renderNew
	 * - renderTask
	 * - renderTasks
	 */

	// 추가 버튼을 눌렀을 때 추가될 HTML 코드
	var renderTemplate = [
		'<li class="task clearfix">',
			'<div class="task-desc">',
				'<input class="complete" type="checkbox">',
				'<input class="description" maxlength="12" type="text" placeholder="등록할 내용을 기입해주세요.">',
			'</div>',
			'<button type="button" class="anim button remove">제거</button>',
		'</li>'
	].join('');

	//
	function renderNew() {
		// $.$tasma 앱에서 .tasks-list를 찾아 renderTask()를 수행
		$.$tasma.find('.tasks-list').prepend( renderTask( {} ) );
	}
	//
	function renderTask( task ) {
		// task는 객체 {}
		// {
		// 	'complete': true,
		// 	'description': 'hi, there'
		// }
		var $task = $( renderTemplate );
		if ( task.complete ) {
			$task.find('.complete').attr('checked', 'checked');
		}
		$task.find('.description').val( task.description );
		return $task;
	}
	//
	function renderTasks( tasks ) {
		// tasks란?
		// task 객체를 담은 배열 객체
		var $tasksArr = $.map( tasks, renderTask );
		$.$tasma.find('.tasks-list').empty().append( $tasksArr );
	}

	/**
	 * --------------------------------
	 * 컨트롤러(Controller)
	 * --------------------------------
	 * 컴포넌트 컨트롤
	 * - add
	 * - rander
	 * - removeAll
	 * - remove
	 * - save
	 * - cancel
	 */
	//
	function add() {
		renderNew();
	}
	//
	function render() {
		renderTasks( loadData() );
	}
	//
	function removeAll() {
		clearData();
		render();
	}
	//
	function remove(evt) {
		console.log($( evt.target ).closest( '.task' ));
		$( evt.target ).closest( '.task' ).remove();
	}
	//
	function save() {
		var tasks = [],
			$tasks = $.$tasma.find('.task');

		$.each( $tasks, function(index, task) {
			var $task = $tasks.eq(index);
			tasks.push({
				'complete': $task.find('.complete').prop('checked'),
				'description': $task.find('.description').val()
			});
		});

		saveData( tasks );
	}
	//
	function cancel() {
		render();
	}

	/**
	 * --------------------------------
	 * 앱 이벤트 핸들러 등록
	 * --------------------------------
	 * 이벤트 핸들러 등록
	 * 초기 렌더링
	 * - registerEventsHandler
	 * - render
	 */
	function registerEventsHandler() {
		$.$tasma.find('.button.new').on('click', add);
		$.$tasma.find('.button.remove-all').on('click', removeAll);
		$.$tasma.find('.tasks-list').on('click', '.button.remove', remove);
		$.$tasma.find('.button.save').on('click', save);
		$.$tasma.find('.button.cancel').on('click', cancel);
	}

	function init() {
		$.$tasma = $('#TASMA');
		registerEventsHandler();
		render();
	}

	$( init );

})(this);