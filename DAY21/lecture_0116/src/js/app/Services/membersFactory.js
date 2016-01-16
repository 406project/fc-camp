angular.module('AppComponents')
.factory('membersFactory', ['$resource', membersFactory]);

function membersFactory($resource) {

	return $resource('https://codecraftpro.com/api/samples/v1/contact/');

}