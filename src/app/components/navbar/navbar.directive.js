angular.module('app').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: '../app/components/navbar/navbar.view.html',
    controller: 'NavbarController'
  };
});
