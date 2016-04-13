angular.module('app').directive('error', function() {
  return {
    restrict: 'E',
    templateUrl: '../app/components/error/error.view.html',
    controller: 'ErrorController'
  };
});
