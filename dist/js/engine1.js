angular.module('PFDApp', []).controller('PFDController', ['$scope', function($scope){
	var expenses = $scope.expenses = [{item: '', cashSpent: ''}];

	$scope.item = '';

	$scope.cashSpent = 0;

	$scope.addRow = function() {
		expenses.push({item, cashSpent});
		// $scope.counter++;
	}

	$scope.delRow = function() {
		expenses.splice(index, 1);
		// if ($scope.counter > 1) {
		// 	$scope.expenses.pop($scope.counter);
		// 	$scope.counter--;			
		// }
	}
}]);