angular.module('PFDApp', []).controller('PFDController', ['$scope', function($scope){
	$scope.expenses = [];

	$scope.addRow = function() {
		$scope.expenses.push({
			item: $scope.expenseItem,
			cashSpent: $scope.expenseCash
		});
		// $scope.counter++;
		$scope.expenseItem = "";
		$scope.expenseCash = "";
	}

	$scope.delRow = function(index) {
		$scope.expenses.splice(index, 1);
		// if ($scope.counter > 1) {
		// 	$scope.expenses.pop($scope.counter);
		// 	$scope.counter--;			
		// }
	}
}]);