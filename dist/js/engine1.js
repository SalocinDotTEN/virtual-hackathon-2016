var pfdApp = angular.module('pfdApp', []);

pfdApp.controller('pfdController', ['$scope', function($scope){
	$scope.calculator = {
		monthlyIncome : '',
		monthlyExpend : ''
	};
}]);