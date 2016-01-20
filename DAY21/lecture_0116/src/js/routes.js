require('angular');
require('angular-route');

(function(angular){
	'use strict';

	var app = angular.module('routeApp', ['ngRoute']);
	app.config(['$routeProvider', '$locationProvider', appConfig]);

	function appConfig($routeProvider, $locationProvider) {

		$locationProvider
			.hasPrefix('!');

	}

})(angular);