var app = angular.module("app", ['ngRoute']);


app.controller('rootCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../app/components/home/home.view.html',
      controller: 'homeCtrl',
    })
    .when('/login', {
      templateUrl: '../app/components/login/login.view.html',
      controller: 'loginCtrl'
    })
    .when('/styleguide', {
      templateUrl: '../assets/css/styleguide.html',
    })
    .otherwise({
      redirectTo: '/'
    });

});
