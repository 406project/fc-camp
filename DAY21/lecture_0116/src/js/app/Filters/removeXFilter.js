angular.module('AppComponents')
.filter('removeX', removeXFilter);

function removeXFilter() {
	return function(input, param) {
		return input.split('x')[0];
	};
}