angular.module('app').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: '../app/components/navigation/navbar.view.html',
    controller: 'NavbarController'
  };
});
