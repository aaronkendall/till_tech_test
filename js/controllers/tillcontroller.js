till.controller("TillCtrl", ['$scope', function($scope) {

  $scope.drinks = false;
  $scope.cakes = false;

  $scope.toggleDrinks = function() {
    $scope.drinks = !$scope.drinks;
    $scope.cakes = false;
  };

  $scope.toggleCakes = function() {
    $scope.cakes = !$scope.cakes;
    $scope.drinks = false;
  };

}]);
