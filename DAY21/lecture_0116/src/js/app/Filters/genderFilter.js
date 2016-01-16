angular.module('AppComponents')
.filter('gender', genderFilter);

function genderFilter() {
	return function(input, param) {
		return input === 'M' ? 'Male' : 'Female';
	};
}