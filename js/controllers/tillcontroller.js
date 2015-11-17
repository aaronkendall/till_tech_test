till.controller("TillCtrl", ['$scope', function($scope) {

  $scope.drinks = false;
  $scope.cakes = false;
  $scope.receipt = false;

  $scope.total = 0;

  $scope.prices = [];

  $scope.selection = [];

  $scope.menu = [
  {
    "shopName": "The Coffee Connection",
    "address": "123 Lakeside Way",
    "phone": "16503600708",
    "prices": [
      {
        "Cafe Latte": 4.75,
        "Flat White": 4.75,
        "Cappucino": 3.85,
        "Single Espresso": 2.05,
        "Double Espresso": 3.75,
        "Americano": 3.75,
        "Cortado": 4.55,
        "Tea": 3.65,
        "Choc Mudcake": 6.40,
        "Choc Mousse": 8.20,
        "Affogato": 14.80,
        "Tiramisu": 11.40,
        "Blueberry Muffin": 4.05,
        "Chocolate Chip Muffin": 4.05,
        "Muffin Of The Day": 4.55
        }
      ]
    }
  ]

  $scope.addSelection = function(choice) {
    $scope.selection.push({['name']: choice, ['price']: $scope.menu[0].prices[0][choice], ['quantity']: 1});
  }

  $scope.calculateTotal = function() {
    $scope.total = $scope.prices.reduce
  };

  $scope.addPrice = function(choice) {
    $scope.prices.push($scope.menu.prices.choice)
  };

  $scope.toggleDrinks = function() {
    $scope.drinks = !$scope.drinks;
    $scope.cakes = false;
  };

  $scope.toggleCakes = function() {
    $scope.cakes = !$scope.cakes;
    $scope.drinks = false;
  };

  $scope.showReceipt = function() {
    $scope.receipt = !$scope.receipt;
  };

}]);
