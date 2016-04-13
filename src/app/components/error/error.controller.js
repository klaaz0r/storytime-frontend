angular.module('app').controller('ErrorController', ['$scope', function($scope) {
  $scope.successDialog = false;
  $scope.errorDialog = false;

  $scope.$on('SUCCESS', function(event, message) {
    $scope.successDialog = true;
    $scope.succesMessage = message;
  });


  $scope.$on('ERROR', function(event, message) {
    $scope.errorDialog = true;
    $scope.errorMessage = message;
  });
}])
