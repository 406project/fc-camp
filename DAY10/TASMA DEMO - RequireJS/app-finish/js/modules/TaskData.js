define([], function() {
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