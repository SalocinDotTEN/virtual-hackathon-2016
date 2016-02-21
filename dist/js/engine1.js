angular.module('PFDApp', ['ngSanitize']).controller('PFDController', ['$scope', function($scope){
	$scope.expenses = [];

	$scope.addRow = function() {
		$scope.expenses.push({
			item: $scope.expenseItem,
			cashSpent: $scope.expenseCash
		});
		// $scope.counter++;
		$scope.expenseItem = "";
		$scope.expenseCash = "";
	    // $scope.totalSpent = 0;
	    // for(var i = 0; i < $scope.expenses.length; i++){
	    //     var addTuple = $scope.expenses[i];
	    //     $scope.totalSpent += addTuple.cashSpent;
	    // }
		// $scope.totalSpent += $scope.expenseItem; 
	}

	$scope.delRow = function(index) {
		$scope.expenses.splice(index, 1);
	    // for(var i = 0; i < $scope.expenses.length; i++){
	        // var tuple = $scope.expenses[index];
	        // $scope.totalSpent -= tuple.cashSpent;
	    // }
	}

	$scope.totalSpent = function(){
	    var total = 0;
	    for(var i = 0; i < $scope.expenses.length; i++){
	        var product = $scope.expenses[i];
	        total += product.cashSpent;
	    }
	    return total;
	}

	$scope.currency = '<i class="fa fa-usd fa-fw"></i>';

	$scope.chgCurrency = function(symbol) {
		var currencies = ["usd","euro","yen","btc","RM"];
		if (symbol < 4) {
			$scope.currency = '<i class="fa fa-'+currencies[symbol]+' fa-fw"></i>';
		} else {
			$scope.currency = 'RM';
		}
	}
}]);