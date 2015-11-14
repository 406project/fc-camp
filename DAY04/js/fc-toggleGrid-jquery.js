/*!
 * fc-toggleGrid.js, jQuery 버전 © yamoo9.net, 2015
*/
(function(global, $, undefined) {

	var class_name       = 'grid',
		$toggle_grid_btn = $('.toggle-grid-btn'),
		$container       = $('.container'),

		toggleGrid = function (event) {
			var type = event.type,
				key  = event.keyCode;
			if (
				type === 'click' ||
				( type === 'keydown' && ( key === 13 || key === 32 ) )
			) {
				$container.toggleClass(class_name);
			}
		};

	$toggle_grid_btn.on('click keydown', toggleGrid);

}(window, window.jQuery));